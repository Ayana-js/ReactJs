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
        error: {},
        firstRepo: 0,
        lastRepo: 4
    }

    lastPage = () => {
        this.setState({
            firstRepo: this.state.firstRepo - 4,
            lastRepo: this.state.lastRepo - 4
        });
    };

    nextPage = () => {
        this.setState({
            firstRepo: this.state.firstRepo + 4,
            lastRepo: this.state.lastRepo + 4
        });
    };

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
    };

    
    render() {
        const { isLoading, repoList, infoAboutUser, firstRepo, lastRepo } = this.state

        return (
 // Информация о себе, контакты, соц. сети
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
                                   target='_blank' 
                                   rel='noopener noreferrer'>
                                   <img className={styles.linkedin} src={iconLink} alt=""/>
                                </a>
                                <a href="https://github.com/Ayana-js"
                                   target='_blank' rel='noopener noreferrer'>
                                   <img className={styles.github} src={iconGithub} alt=""/>
                                </a>
					            <a href="https://www.facebook.com/profile.php?id=100026307923055" 
                                   target='_blank' rel='noopener noreferrer'>
                                   <img  className={styles.facebook} src={iconFacebook} alt=""/>
                                </a>
                                </div>
                            </div>
                        </div>
{/* Мои проекты */}

     {isLoading ? < LinearProgress /> :
         <div className={styles.projects}>
           <h4 className={styles.title}> Мои проекты:</h4>
            <a className={styles.link__projects}
                href="https://whs-ayanajs.vercel.app/"
                target='_blank' 
                rel='noopener noreferrer'> 
                1. Сайт
                </a>
                <a className={styles.link__projects}
                href="https://game-ayana.vercel.app/"
                target='_blank' 
                rel='noopener noreferrer'> 
                2. Игра
                </a>
                <a className={styles.link__projects}
                href="https://react-app-js-seven.vercel.app/"
                target='_blank' 
                rel='noopener noreferrer'> 
                3. Приложение
                 </a>
        </div> }               
{/* Список репозиториев  */}

        {isLoading ? < LinearProgress /> :
         <div className={styles.main}>
          <h4 className={styles.repo_title}> Репозитории на github.com</h4>
           {this.state.isErrorRepositories && (
              <div className={styles.error}></div>
            )}
            <div className={styles.repos}>
              <div className={styles.list}>
                {repoList.slice(firstRepo, lastRepo).map(repo =>
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
              <div className={styles.buttons_wrap}>
          <button className={styles.button}
             onClick={this.lastPage}
             disabled={firstRepo < 4}>
              Назад
          </button>
          <button className={styles.button}
             onClick={this.nextPage}
             disabled={repoList.length < lastRepo}>
              Далее
          </button>
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