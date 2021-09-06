import React from 'react';
import { LinearProgress } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { Octokit } from '@octokit/rest';
import styles from "../About/About.module.css"
import iconTelegram from "../../img/telegram.svg"
import iconLink from "../../img/link.svg"
import iconGithub from "../../img/github.svg"
import iconFacebook from "../../img/facebook.svg"
import iconMail from "../../img/mail.svg"



const octokit = new Octokit();

class About extends React.Component {
    state = {
        isLoading: true,
        repoList: [],
        infoAboutUser: [],
        isError: false,
        isErrorRepositories: false,
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
    render() {
        const { isLoading, repoList, infoAboutUser } = this.state
        return (
            <div className={styles.wrap}>
                <CardContent className={styles.wrap}>
                    {this.state.isError && (
                        <div>
                            <h3>{this.state.error.name}</h3>
                            <p>{this.state.error.message}</p>
                        </div>
                    )}
                    {isLoading ? < LinearProgress /> : <div>
                        <div className={styles.header}>
                            <img
                                alt=''
                                className={styles.avatar}
                                variant="square"
                                src={infoAboutUser.avatar_url}>
                            </img>
                            <div className={styles.content}>
                                <h1 className={styles.name}>Ayana Sultanova </h1>
                                <p className={styles.description}> Front-end developer </p>
                                <a className={styles.link__mail}
                                   href="mailto: ayana.sultanovaa@gmail.com"
                                   target='_blank' rel='noopener noreferrer'>
                                   <img className={styles.img} src={iconMail} alt=""/>
                                   ayana.sultanovaa@gmail.com
                                </a>
                                <a className={styles.link__tel}
                                   href="https://t.me/ayasltn" target='_blank' 
                                   rel='noopener noreferrer'>
                                   <img className={styles.img} src={iconTelegram} alt=""/>
                                   +996 551 99 86 55
                                </a>
                            <div className={styles.icons}>
                                <a href="http://linkedin.com/in/aiana-sultanova-888606207" 
                                   className={styles.linkedin} target='_blank' 
                                   rel='noopener noreferrer'>
                                   <img src={iconLink} alt=""/>
                                </a>
                                <a href="https://github.com/Ayana-js"
                                   className={styles.github} 
                                   target='_blank' rel='noopener noreferrer'>
                                   <img src={iconGithub} alt=""/>
                                </a>
					            <a href="https://www.facebook.com/profile.php?id=100026307923055" 
                                   target='_blank' rel='noopener noreferrer'>
                                   <img src={iconFacebook} alt=""/>
                                </a>
                                </div>
                            </div>
                        </div>




                        {isLoading ? < LinearProgress /> :
                            <div className={styles.main}>
                                <h4> Репозитории на github.com</h4>
                                {this.state.isError && (
                                    <div className={styles.error}>
                                        <p className={styles.error__text}>Что-то пошло не так...</p>
                                        <p className={styles.error__help}>Попробуйте загрузить ещё раз</p>
                                    </div>
                                )}
                                <div className={styles.repos}>
                                    <div className={styles.list}>
                                        {repoList.map(repo =>
                                            <ul key={repo.id}>
                                                <div className={styles.repo}>
                                                    <div className={styles.repo_wrapped}>                                              
                                                      <a
                                                        href={repo.html_url}
                                                        className={styles.repo_link}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        {repo.name}
                                                    </a>
                                                        <div className={styles.repo_info}>
                                                            <div className={styles[`repo_info__${repo.language}-icon`.toLowerCase()]}></div>
                                                            <p className={styles.repo_language}>{repo.language}</p>
                                                            <p className={styles.repo_star}>{repo.stargazers_count}</p>
                                                            <p className={styles.repo_fork}>{repo.forks}</p>
                                                            <p className={styles.repo_update}>{repo.updated_at}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>}
                </CardContent>
            </div>
        );
    }
}

export default About;