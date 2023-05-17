import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Parser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { NewsService } from '@service/NewsService';
import LoaderSpinner from '@components/shared/LoaderSpinner/LoaderSpinner';

const NewsSinglePage = () => {

  const [news, setNews] = useState('');
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoader(true);
        const { status, body } = await NewsService.single(id);

        if (status && body.body) setNews(body.body);
        else toast.error('Произошла ошибка с сервером!');
        
      } catch (error) {
        console.error(error);
        toast.error('Ошибка загрузки новости');
      } finally {
        setLoader(false);
      }
    };

    fetchNews();
  }, [id]);

  if (loader) {
    return (
      <div className="news__content__loader">
        <LoaderSpinner />
      </div>
    )
  }

  return (
    <div className='wrapper'>
      <div>
        {Parser(news)}
      </div>
    </div>
  )
}

export default NewsSinglePage