import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps { }

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Aspire Leadership Program</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://drive.google.com/file/d/1WaZH1vaBREcWkWIlcGBkJepRVuoqe2qs/view?usp=sharing'}
                        >
                            <h4>View Certificate</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Leadership Development Program</h3>
                        <b>
                            <p>Summer 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Completed 30 hours from a Harvard Business School-founded online leadership
                    development program, connecting with peers and educators from over 150 countries.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Strengthened core leadership, networking, and communication skills
                            through live seminars with Harvard faculty.
                        </p>
                    </li>
                    <li>
                        <p>
                            Engaged in idea exchange within a global virtual classroom,
                            collaborating with professionals from 150+ countries.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed strategic thinking and cross-cultural communication
                            capabilities through interactive leadership workshops.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built a global professional network and gained insights from
                            Harvard Business School leadership methodologies.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Artificial Intelligence Program</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://drive.google.com/file/d/18ydehxiT51Z2pc7WU7lHrkd0ctsZFQZ0/view?usp=sharing'}
                        >
                            <h4>View Certificate</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>AI Technical Training</h3>
                        <b>
                            <p>Summer 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Completed 90 hours of technical AI training and 30 hours of soft skills
                    training through NTI's comprehensive online course.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Mastered foundational AI concepts including machine learning,
                            neural networks, and data processing techniques.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed practical skills in Python programming for AI applications
                            and data analysis.
                        </p>
                    </li>
                    <li>
                        <p>
                            Enhanced professional soft skills including communication,
                            teamwork, and problem-solving methodologies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Applied AI concepts through hands-on projects and real-world
                            case studies in the telecommunications domain.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Odoo Training Program</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://drive.google.com/file/d/1C0U8n--sqOOyqPf2pxAZC7ULm0welm6T/view?usp=sharing'}
                        >
                            <h4>View Certificate</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>ERP & AI Integration Training</h3>
                        <b>
                            <p>Summer 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Completed comprehensive Odoo training focused on financial transactions,
                    AI integration, and enterprise resource planning functionalities.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Gained hands-on experience with Odoo's core functionalities
                            including Sales, Inventory, and Studio modules.
                        </p>
                    </li>
                    <li>
                        <p>
                            Mastered financial transaction processing and accounting
                            workflows within the Odoo ERP system.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented AI integration techniques for business process
                            automation and intelligent reporting.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed custom business applications using Odoo Studio
                            for enterprise workflow optimization.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>AI Entrepreneurship Club</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://menoufia.edu.eg/'}
                        >
                            <h4>Menoufia University</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Event Coordinator</h3>
                        <b>
                            <p>February 2022 - August 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Coordinated events and programs for the AI Entrepreneurship Club,
                    providing valuable resources and facilitating connections for local entrepreneurs.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Organized 15+ workshops and events reaching 300+ participants,
                            focusing on AI applications in entrepreneurship.
                        </p>
                    </li>
                    <li>
                        <p>
                            Provided resources, mentorship, and networking opportunities
                            for local AI startups and entrepreneurs.
                        </p>
                    </li>
                    <li>
                        <p>
                            Facilitated connections between student developers, industry
                            professionals, and potential investors.
                        </p>
                    </li>
                    <li>
                        <p>
                            Fostered a thriving startup ecosystem by promoting innovation
                            and collaboration within the university community.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;