import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';


interface RepositoryParams{
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    }    
}

const Repository: React.FunctionComponent = () => {
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        api.get(`repos/${params.repository}`).then((response) => {
            setRepository(response.data);
            console.log(response.data);
        })

        api.get(`repos/${params.repository}/issues`).then((response) => {
            setIssues(response.data);
            console.log(response.data);
        })
    // async function loadData(): Promise<void> {
    //     const [repository, issues] = await Promise.all([
    //         api.get(`repos/${params.repository}`),
    //         api.get(`repos/${params.repository}/issues`),
    //     ]);

    //     console.log(repository);
    //     console.log(issues);
    // }

    // loadData();
    }, [params.repository]);


   // return <h1>Repository:{params.repository}</h1>;
    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer"></img>
                <Link to="/">
                    <FiChevronLeft size={16}></FiChevronLeft>
                    Return
                </Link>
            </Header>

            { repository && (
                            <RepositoryInfo>
                            <header>
                                <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                                    <div>
                                        <strong>{repository.full_name}</strong>
                                        <p>{repository.description}</p>
                                    </div>
                            </header>
                            <ul>
                                <li>
                                    <strong>{repository.stargazers_count}</strong>
                                    <span>Stars</span>
                                </li>
                                <li>
                                    <strong>{repository.forks_count}</strong>
                                    <span>Forks</span>
                                </li>
                                <li>
                                    <strong>{repository.open_issues_count}</strong>
                                    <span>Open Issues</span>
                                </li>
                            </ul>  
                        </RepositoryInfo>
            )}
            <Issues>
                {issues.map( issue => (
                    <a key={issue.id} href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>    
                        </div>
                        <FiChevronRight size={20}/> 
                    </a>    
                ))}
            </Issues>
        </>  
    );     
};
// a link externo, link link interno
export default Repository;