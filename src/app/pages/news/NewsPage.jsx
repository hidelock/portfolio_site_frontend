import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { NewsService } from '@service/NewsService';
import LoaderSpinner from '@components/shared/LoaderSpinner/LoaderSpinner';
import NewsList from '@components/pages/news/NewsList/NewsList';
import NewsPagination from '@components/pages/news/NewsPagination/NewsPagination';
import NewsEmpty from '@components/pages/news/NewsEmpty/NewsEmpty';
import './NewsPage.css';

const NewsPage = () => {

    const [news, setNews] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoader(true);

            try {
                const { body: { news, info } } = await NewsService.get(currentPage);

                setNews(news || []);
                setTotalPages(info.total_pages);
            } catch (error) {
                console.log(error)
                toast.error("Произошла ошибка с сервером!");
            } finally {
                setLoader(false);
            }
        };

        fetchData();
    }, [currentPage]);


    if (loader) {
        return (
            <div className='wrapper'>
                <LoaderSpinner />
            </div>
        )
    }

    if (news.length <= 0) {
        return (
            <div className='wrapper'>
                <NewsEmpty />
            </div>
        )
    }

    return (
        <div className='wrapper'>
            <NewsList news={news} />
            <NewsPagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
    )
}

export default NewsPage