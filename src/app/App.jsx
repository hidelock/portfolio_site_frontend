import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "@components/layouts/Layout";
import InfoPage from "@pages/info/InfoPage";
import OrderPage from "@pages/order/OrderPage";
import ProjectsPage from "@pages/projects/ProjectsPage";
import ChatGptPage from "@pages/chatgpt/ChatGptPage";
import NewsPage from "@pages/news/NewsPage";
import NewsSinglePage from "@pages/news/single/NewsSinglePage";
import { ROUTE_CHAT_GPT, ROUTE_INFO, ROUTE_NEWS, ROUTE_ORDER, ROUTE_PROJECTS } from "@config/routes";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
function App() {

    return (
        <>
            <BrowserRouter>
                <div className="layout">
                    <Routes>
                        <Route path={ROUTE_INFO} element={<Layout />}>
                            <Route index element={<InfoPage />} />
                            <Route path={ROUTE_PROJECTS} element={<ProjectsPage />} />
                            <Route path={ROUTE_NEWS} element={<NewsPage />} />
                            <Route path={ROUTE_NEWS + "/:id"} element={<NewsSinglePage />} />
                            <Route path={ROUTE_ORDER} element={<OrderPage />} />
                            <Route path={ROUTE_CHAT_GPT} element={<ChatGptPage />} />
                            <Route path="*" element={<InfoPage />} />
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
            <ToastContainer autoClose={3000} theme="dark" />
        </>
    );
}

export default App;
