
import React from 'react';
import { CardContent } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { Octokit } from '@octokit/rest';
import styles from "../About/About.module.css"

const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList: [],
        infoAboutUser: [],
        isError: false
    }

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'Ayana-js'
        })
        .then(({ data }) => {
            this.setState({
                repoList: data,
                isLoading: false,
                avatarUrl: data[0].owner.avatar_url,
                login: data[0].owner.login
            });
        })
        .catch(err => {
            this.setState({ 
              isLoading: false,
              isError: true,
            });
          });

        octokit.users.getByUsername({
            username: 'Ayana-js'
          })
          .then(({data}) => {
            this.setState({ 
              infoAboutUser: data,
              isLoading: false,
              avatarUrl: data[0].owner.avatar_url,
              login: data[0].owner.login
            });
          })
          .catch(err => {
            this.setState({ 
              isLoading: false,
              isError: true,
            });
          });
    }
    render () {
        const { isLoading, repoList, isError, infoAboutUser } = this.state
        return (
            <CardContent>
                <h1 className={styles.title}>{ isLoading ? < LinearProgress /> : 'Список репозиториев:' }</h1>
                {!isLoading && <ol>
                    <Avatar
                classname={styles.avatar}
                alt={this.state.repoList.username}
                src={this.state.avatarUrl}
              />
              <div>
                <h3>{this.state.login}</h3>
            </div>
                        {repoList.map(repo => 
                            (<li className={styles.repos} key={repo.id}>
                            {repo.html_url}
                            <a className={styles.link} href={repo.html_url}>
                            {repo.name}
                    </a>  
                        </li>))}
                    </ol>}
            </CardContent>
);
    }
}

export default About;