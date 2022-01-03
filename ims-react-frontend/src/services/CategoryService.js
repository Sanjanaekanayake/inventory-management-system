import axios from "axios";
import authHeader from './auth-header';

const CATEGORY_API_BASE_URL = "http://localhost:8080/categories";
const PRODUCT_API_BASE_URL = "http://localhost:8080/categories/products";
class CategoryService{

    getCategories(){
        return axios.get(CATEGORY_API_BASE_URL, { headers: authHeader() });
    }

    createCategory(category){
        return axios.post(CATEGORY_API_BASE_URL, category,{ headers: authHeader() });
    }  

    updateCategory(category, categoryId){
        return axios.put(CATEGORY_API_BASE_URL + '/' + categoryId, category,{ headers: authHeader() });
    }

    getCategoryById(categoryId){
        return axios.get(CATEGORY_API_BASE_URL + '/' + categoryId,{ headers: authHeader() });
    }

    deleteCategory(categoryId){
        return axios.delete(CATEGORY_API_BASE_URL + '/' + categoryId,{ headers: authHeader() });
    }

    getProducts(categoryId){
        return axios.get(PRODUCT_API_BASE_URL + '/' + categoryId, { headers: authHeader() });

    }

    createProduct(product,categoryId){
        
        return axios.post(PRODUCT_API_BASE_URL+'/'+categoryId, product,{ headers: authHeader() });

    }

    updateProduct(product,productId){
        return axios.put(PRODUCT_API_BASE_URL + '/' +productId , product,{ headers: authHeader() });
    }

    deleteProduct(productId){
        return axios.delete(PRODUCT_API_BASE_URL + '/' + productId,{ headers: authHeader() });
    }

    getProductById(productId)
    {
        return axios.get('http://localhost:8080/products/' + productId,{ headers: authHeader() });
    }

}

export default new CategoryService();