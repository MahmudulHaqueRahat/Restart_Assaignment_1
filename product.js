const loadProduct=()=>{
    fetch('https://fakestoreapi.com/products?limit=4')
    .then((res)=>res.json())
    .then(data=>displayProducts(data))
    
}

const displayProducts=(products)=>{
    const productContainer=document.getElementById('product-container');
    productContainer.innerHTML='';

    for(let product of products){
        const productDiv=document.createElement('div');
         productDiv.innerHTML = `
            <figure class="px-10 pt-10 bg-[#f3f4f6] h-64 flex items-center justify-center">
                <img src="${product.image}" alt="${product.title}" class="h-full object-contain mix-blend-multiply" />
            </figure>
            <div class="card-body">
                <div class="flex justify-between items-center mb-2">
                    <span class="badge badge-ghost text-[#4a7ec7] bg-blue-50 p-3 font-bold uppercase text-xs">${product.category}</span>
                    <div class="flex items-center gap-1 text-gray-500 text-sm font-semibold">
                         <i class="fa-solid fa-star text-yellow-400"></i>
                         <span>${product.rating.rate}</span>
                    </div>
                </div>

                <h2 class="card-title text-lg font-bold text-gray-800   overflow-hidden" title="${product.title}">
                    ${product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}
                </h2>

                <p class="text-2xl font-bold text-gray-900">$${product.price}</p>

                <div class="card-actions justify-end mt-4">
                    <button onclick="showProductDetails(${product.id})" class="btn btn-outline border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black flex-1">
                        <i class="fa-regular fa-eye"></i> Details
                    </button>
                    <button class="btn bg-[#5b4eff] hover:bg-[#483bee] text-white border-none flex-1">
                        <i class="fa-solid fa-cart-shopping"></i> Add
                    </button>
                </div>
            </div>
        `; 
        productContainer.appendChild(productDiv);
    }

    
};
loadProduct();