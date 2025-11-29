import React from 'react';
import meNow from '../../assets/pictures/me.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps { }

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={meNow} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Amr Mohamed</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Fresh graduate!
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:amrkhalafalla607@gmail.com">
                        amrkhalafalla607@gmail.com

                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have had a curiosity about how things
                    worked. Although I wasn’t initially passionate about technology, God clearly had different plans for me. That’s when I discovered my true passion in this field — especially artificial intelligence
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={meNow} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div> */}

                <p>
                    I started taking AI seriously in 2021 after joining the
                    Faculty of Artificial Intelligence at Menoufia University.
                    Since then, I’ve worked on many passion-driven projects,
                    applications, and more. You can check out the projects
                    available for viewing on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    In 2025, I graduated from the  University, with a “Good” grade.
                    After graduation, I began focusing on building real-world AI solutions
                    and expanding my experience through practical projects and continuous learning.

                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond coding and AI, I have hobbies that I truly enjoy in my free time.
                            One of the most meaningful hobbies for me is reading books and novels, especially
                            the “A Song of Ice and Fire” series. I also enjoy gaming as a way to relax and
                            disconnect from work. These hobbies keep me inspired, creative, and always learning
                            something new.

                        </p>
                        <br />
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 1:</b>
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on Linkedin{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/amr-mohamed-9ab096232/"
                    >
                        @Amr mohamed
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:amrkhalafalla607@gmail.com">
                        amrkhalafalla607@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
