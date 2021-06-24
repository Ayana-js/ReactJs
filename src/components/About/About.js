
import React from 'react';
import { CardContent } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList: []
    }

    componentDidMount() {
        octokit.repos.listForUser({
            userName: 'Ayana-js'
        }).then(({ data }) => {
            this.setState({
                repoList: data,
                isLoading: false
            });
        });
    }
    render () {
        const { isLoading, repoList } = this.state
        return (
            <CardContent>
                <h1>{ isLoading ? < LinearProgress /> : 'Список репозиториев:' }</h1>
                {!isLoading && <ol>
                        {repoList.map(repo => (<li key={repo.id}>
                            {repo.html_url}
                        </li>))}
                    </ol>}
            </CardContent>
);
    }
}

export default About;