import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import LoaderSpinner from '@components/shared/LoaderSpinner/LoaderSpinner';
import { ProjectsService } from '@service/ProjectsService';
import './ProjectsPage.css';
import ProjectsPagination from '@components/pages/projects/ProjectsPagination/ProjectsPagination';
import ProjectsList from '@components/pages/projects/ProjectsList/ProjectsList';
import ProjectsEmpty from '@components/pages/projects/ProjectsEmpty/ProjectsEmpty';



const ProjectsPage = () => {

    const [projects, setProjects] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);

        const fetchData = async () => {
            try {
                const { body: { projects, info } } = await ProjectsService.get(currentPage);

                setProjects(projects || []);
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
    if (projects.length <= 0) {
        return (
            <div className='wrapper'>
                <ProjectsEmpty/>
            </div>
        )
    }

    return (
        <div className='wrapper'>
            <ProjectsList projects={projects} />
            <ProjectsPagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
    )
}

export default ProjectsPage