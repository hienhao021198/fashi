
import Singin from '../../components/auth/Singin/Singin';
import Register from '../../components/auth/Register/Register';
import IndexApp from '../../components/index';
import Shop from '../../components/shop/Shop';
import Blog from '../../components/blog/Blog';
import DetailProduct from '../../components/shop/Product/DetailProduct';
import ShopMen from '../../components/shop/ShopMen/index';
import ShopWomen from '../../components/shop/ShopWomen/index';
import ShopKid from '../../components/shop/ShopKid/index';
import Admin from '../../layouts/Admin'
export default [
    {
        path: '/',
        component: IndexApp,
        exact: true
    },
    {
        path: '/login',
        component: Singin,
        exact: false
    },
    {
        path: '/register',
        component: Register,
        exact: false
    },
    {
        path: '/shop',
        component: Shop,
        exact: false
    },
    {
        path: '/blog',
        component: Blog,
        exact: false
    },
    {
        path: '/detail-product/:id',
        component: DetailProduct,
        exact: true,
        
    },
    {
        path: '/shop-men',
        component: ShopMen,
        exact: false
    }
    ,
    {
        path: '/shop-women',
        component: ShopWomen,
        exact: false
    },
    {
        path: '/shop-kid',
        component: ShopKid,
        exact: false
    },
    {
        path: '/admin',
        component: Admin,
        exact: true
    }
]