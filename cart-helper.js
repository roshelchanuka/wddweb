/**
 * Velvet Vogue Shopping Cart Helper Core
 * Persists cart state in localStorage, manages navbar badges, and handles toast alerts.
 */

class CartHelper {
    constructor() {
        this.storageKey = 'velvet_vogue_cart';
        this._initStyles();
        // Wait for DOM to load, then run badge updates and page-specific initializations
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        this.updateNavbarBadge();
        this.bindProductPage();
    }

    // Dynamic style injection for badges, toast notifications, and modals
    _initStyles() {
        // All e-commerce styles moved to style.css to keep design separate from behavior.
    }

    // Core localStorage methods
    getItems() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error reading cart data', e);
            return [];
        }
    }

    saveItems(items) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(items));
            this.updateNavbarBadge();
            // Dispatch a custom event to notify listeners on the cart page
            window.dispatchEvent(new CustomEvent('cartUpdated'));
        } catch (e) {
            console.error('Error saving cart data', e);
        }
    }

    addItem(item) {
        // Validate inputs
        if (!item.name || !item.price) return;
        
        const items = this.getItems();
        // Check if matching name and size already exists
        const existingIndex = items.findIndex(
            i => i.name.toLowerCase() === item.name.toLowerCase() && i.size === item.size
        );

        if (existingIndex !== -1) {
            items[existingIndex].quantity = parseInt(items[existingIndex].quantity) + parseInt(item.quantity || 1);
        } else {
            items.push({
                name: item.name,
                price: parseFloat(item.price),
                size: item.size || 'N/A',
                quantity: parseInt(item.quantity || 1),
                image: item.image || './image/logo.avif'
            });
        }

        this.saveItems(items);
        this.showToast(item);
    }

    removeItem(index) {
        const items = this.getItems();
        if (index >= 0 && index < items.length) {
            items.splice(index, 1);
            this.saveItems(items);
        }
    }

    updateItemQuantity(index, quantity) {
        const items = this.getItems();
        if (index >= 0 && index < items.length) {
            items[index].quantity = Math.max(1, parseInt(quantity));
            this.saveItems(items);
        }
    }

    clearCart() {
        localStorage.removeItem(this.storageKey);
        this.updateNavbarBadge();
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    }

    getCartTotal() {
        return this.getItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getCartCount() {
        return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
    }

    // Dynamic UI updates
    updateNavbarBadge() {
        // Find links pointing to cart.html supporting typos
        const cartLinks = document.querySelectorAll('a[href*="cart.html"], a[herf*="cart.html"]');
        const count = this.getCartCount();

        cartLinks.forEach(link => {
            // Remove existing badge
            const oldBadge = link.querySelector('.cart-badge');
            if (oldBadge) oldBadge.remove();

            if (count > 0) {
                // Ensure parent position relative for absolute positioning of badge
                const parentLi = link.closest('li');
                if (parentLi) {
                    parentLi.style.position = 'relative';
                }
                link.style.position = 'relative';
                link.style.display = 'inline-block';

                const badge = document.createElement('span');
                badge.className = 'cart-badge';
                badge.textContent = count;
                link.appendChild(badge);
            }
        });
    }

    showToast(item) {
        let container = document.querySelector('.vv-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'vv-toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = 'vv-toast';
        
        // Handle local currency string format
        const formattedPrice = new Intl.NumberFormat('en-LK', {
            style: 'currency',
            currency: 'LKR',
            minimumFractionDigits: 2
        }).format(item.price * item.quantity);

        toast.innerHTML = `
            <img class="vv-toast-img" src="${item.image}" alt="${item.name}">
            <div class="vv-toast-content">
                <p class="vv-toast-title">Added to Cart! 🎉</p>
                <p class="vv-toast-meta">${item.name} (${item.size}) x ${item.quantity}</p>
                <a href="cart.html" class="vv-toast-action">View Cart</a>
            </div>
            <button class="vv-toast-close">&times;</button>
        `;

        container.appendChild(toast);

        // Slide in
        setTimeout(() => toast.classList.add('show'), 50);

        // Click handlers
        const closeBtn = toast.querySelector('.vv-toast-close');
        closeBtn.onclick = () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        };

        // Auto remove
        setTimeout(() => {
            if (toast.parentNode) {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 400);
            }
        }, 4000);
    }

    // Dynamic details page hooks
    bindProductPage() {
        const detailsSection = document.getElementById('prodetails');
        if (!detailsSection) return;

        const addToCartBtn = detailsSection.querySelector('button.normal, button');
        if (!addToCartBtn) return;

        // Ensure we don't bind multiple times
        if (addToCartBtn.dataset.cartBound) return;
        addToCartBtn.dataset.cartBound = 'true';

        addToCartBtn.addEventListener('click', (e) => {
            e.preventDefault();

            // Extract Name
            const nameEl = detailsSection.querySelector('h4');
            const name = nameEl ? nameEl.textContent.trim() : '';

            // Extract Price
            const priceEl = detailsSection.querySelector('h2');
            if (!priceEl) return;
            // Clean price text e.g. "Rs.10,000" or "Rs. 1,245" to just float values
            const priceText = priceEl.textContent.replace(/[^\d.]/g, '');
            const price = parseFloat(priceText);

            // Extract Size
            const sizeEl = detailsSection.querySelector('select');
            const size = sizeEl ? sizeEl.value : 'Select Size';

            if (size === 'Select Size' || size === '') {
                this.showWarningAlert('Please select a valid product size first!');
                if (sizeEl) {
                    sizeEl.focus();
                    sizeEl.style.border = '2px solid #ef3636';
                    setTimeout(() => sizeEl.style.border = '', 2000);
                }
                return;
            }

            // Extract Quantity
            const qtyEl = detailsSection.querySelector('input[type="number"]');
            const quantity = qtyEl ? parseInt(qtyEl.value) : 1;

            if (isNaN(quantity) || quantity <= 0) {
                this.showWarningAlert('Please select a valid quantity greater than 0!');
                return;
            }

            // Extract Image URL
            const imgEl = detailsSection.querySelector('#mainimg, img');
            const image = imgEl ? imgEl.getAttribute('src') : '';

            // Add item to cart
            this.addItem({ name, price, size, quantity, image });
        });
    }

    showWarningAlert(message) {
        // Beautiful alert drawer
        let container = document.querySelector('.vv-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'vv-toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = 'vv-toast';
        toast.style.borderLeft = '5px solid #ef3636';
        
        toast.innerHTML = `
            <div style="font-size: 24px; color: #ef3636;">⚠️</div>
            <div class="vv-toast-content">
                <p class="vv-toast-title" style="color: #ef3636;">Selection Required</p>
                <p class="vv-toast-meta" style="margin: 0;">${message}</p>
            </div>
            <button class="vv-toast-close">&times;</button>
        `;

        container.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 50);

        const closeBtn = toast.querySelector('.vv-toast-close');
        closeBtn.onclick = () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        };

        setTimeout(() => {
            if (toast.parentNode) {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 400);
            }
        }, 4000);
    }
}

// Global initialization
window.cartHelper = new CartHelper();
