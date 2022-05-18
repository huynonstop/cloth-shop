# E-Cloth-Shop React

React 18 - useContext - React router dom v6

Demo: https://e-cloth-shop.netlify.app/

## Route map

```jsx
<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="shop" element={<Shop />} />
    <Route path="auth" element={<Auth />} />
    <Route path="checkout" element={<Checkout />} />
  </Route>
</Routes>
```
