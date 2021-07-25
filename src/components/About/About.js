import React from 'react';
import { LinearProgress } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { Octokit } from '@octokit/rest';
import styles from "../About/About.module.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
// import MailIcon from '@material-ui/icons/Mail';



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
                {/* <MailIcon className={styles.mail}></MailIcon> */}
                <a className={styles.link__mail} href=" mailto:ayana.sultanovaa@gmail.">  <img alt='' src='../../vector.png'> </img> ayana.sultanovaa@gmail.com</a>
                <TelegramIcon className={styles.tel}></TelegramIcon>
                <a className={styles.link__tel} href="https://t.me/ayasltn">+996(551)998655</a>
                <div className={styles.icons}>
                  <LinkedInIcon className={styles.color}></LinkedInIcon>
                  <GitHubIcon className={styles.color}></GitHubIcon>
                  <FacebookIcon className={styles.color}></FacebookIcon>
                </div>
              </div>
            </div>




            {isLoading ? < LinearProgress /> :
              <div className={styles.main}>
                <h4> Репозитории на github.com</h4>
                {this.state.isError && (
                  <div className={styles.error}> </div>
                )}
                {repoList.map(repo =>
                (<ul key={repo.id} className={styles.repo}>
                  {/* {isLoading ? < LinearProgress /> : */}
                    <div className={styles.repos}>
                      <div className={styles.list}>
                        <a
                          // className={styles.link}
                          href={repo.html_url}
                          // href={repo.svn_url}
                          // className={styles['info-about-repository-wrapped__link']}
                          // target='_blank'
                          // rel='noopener noreferrer'
                        >
                          {repo.name}
                        </a>
                        <div className={styles['info-about-repository']}>
                          <div className={styles[`info-about-repository__${repo.language}-icon`.toLowerCase()]}></div>
                          <p className={styles['info-about-repository__language']}>{repo.language}</p>
                          <p className={styles['info-about-repository__star']}>{repo.stargazers_count}</p>
                          <p className={styles['info-about-repository__forks']}>{repo.forks}</p>
                          <p className={styles['info-about-repository__update']}>{repo.updated_at}</p>
                        </div>
                      </div>
                    </div>
                   </ul>
                ))}
              </div>
            }
          </div>}
        </CardContent>
        <div className={styles.main}>
          {isLoading ? <div className={styles.preloader}></div> :
            <div className={styles.works__wrapp}>
              <h1 className={styles.works__title}>Репозитории на github.com</h1>
              {this.state.isError && (
                <div className={styles.error}> </div>
              )}

              <div className={styles.repositories}>
                <div className={styles.list}>
                  {repoList.map(repo => (
                    <ul key={repo.id}>
                      <div className={styles.repository}>
                        <div className={styles['info-about-repository-wrapped']}>
                          <a
                            href={repo.svn_url}
                            className={styles['info-about-repository-wrapped__link']}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {repo.name}
                          </a>
                          <div className={styles['info-about-repository']}>
                            <div className={styles[`info-about-repository__${repo.language}-icon`.toLowerCase()]}></div>
                            <p className={styles['info-about-repository__language']}>{repo.language}</p>
                            <p className={styles['info-about-repository__star']}>{repo.stargazers_count}</p>
                            <p className={styles['info-about-repository__union']}>{repo.forks}</p>
                            <p className={styles['info-about-repository__update']}>{repo.updated_at}</p>
                          </div>
                        </div>
                      </div>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default About;