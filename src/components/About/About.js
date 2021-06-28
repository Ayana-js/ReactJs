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
        isError: false,
        error: {}
    }

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'Ayana-js'
        })
        .then(({ data }) => {
            this.setState({
                repoList: data,
                isLoading: false,
            });
        })
        .catch(err => {
            this.setState({ 
              isLoading: false,
              isError: true,
              error: err
            });
          });

        octokit.users.getByUsername({
            username: 'Ayana-js'
          })
          .then(({ data }) => {
            this.setState({ 
              infoAboutUser: data,
              isLoading: false
            });
          })
          .catch(err => {
            this.setState({ 
              isLoading: false,
              isError: true,
              error: err
            });
          });
    }
    render () {
        const { isLoading, repoList, infoAboutUser } = this.state
        return (
            <CardContent>
              {this.state.isError && (
               <div>
                 <h3>{this.state.error.name}</h3>
                 <p>{this.state.error.message}</p>
               </div>
              )}
                <h1 className={styles.title}>{ isLoading ? < LinearProgress /> : 'Список репозиториев:' }</h1>
                {!isLoading && <ol>
               <Avatar 
                  className={styles.avatar}  
                 src={infoAboutUser.avatar_url}>
               </Avatar>
              <div>
                <h3>{infoAboutUser.login}</h3>
            </div>
                {repoList.map(repo => 
                  (<li key={repo.id} className={styles.repos}>
                      <a className={styles.link} href={repo.html_url}>
                      {repo.name}
                      </a> 
                  </li> 
                    ))}
                    </ol>}
            </CardContent>
);
    }
}

export default About;