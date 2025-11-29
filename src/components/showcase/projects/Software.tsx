import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps { }

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>AI</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>ARGUS AI - Smart Exam Monitoring System</h2>
                <br />
                <p>
                    ARGUS AI is a real-time AI-powered system designed to detect cheating behaviors and unauthorized tools in physical exam halls using computer vision, facial recognition, and natural language analytics. It integrates object detection, tracking, identity verification, and a smart assistant to ensure exam integrity, support live monitoring, and provide detailed reporting.
                </p>
                <br />
                <p>
                    The system supports multi-person tracking with real-time feedback, achieving high accuracy in detecting suspicious behaviors. It includes a web interface for live alerts and RAG-based querying of logs, making it suitable for educational institutions seeking to automate proctoring.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/amr-ai/Monitoring-Student-Cheating-detetion"
                        >
                            <p>
                                <b>[GitHub]</b> - Monitoring-Student-Cheating-detetion
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Character Simulator RAG System</h2>
                <br />
                <p>
                    Character Simulator RAG is an intelligent system that combines artificial intelligence and RAG (Retrieval Augmented Generation) technologies to simulate digital characters in a convincing way. It enables users to interact with AI-powered personas that blend personality-driven dialogue with document retrieval for contextually enriched responses.
                </p>
                <br />
                <p>
                    The project supports multiple personas with unique tones and styles, allowing for customizable interactions via a web interface. Users can index their own documents for enhanced context, making it ideal for applications like virtual assistants or educational simulations.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/amr-ai/character-simulator-RAG"
                        >
                            <p>
                                <b>[GitHub]</b> - character-simulator-RAG
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>JobHunter-AI</h2>
                <br />
                <p>
                    JobHunter-AI is a web application that leverages artificial intelligence to help users find their perfect job. It combines web scraping with RAG technology to deliver an intelligent job search experience, featuring smart CV matching and an AI-powered career advisor chatbot.
                </p>
                <br />
                <p>
                    The platform automates job discovery, CV analysis, and skill matching, with user profiles for tracking applications. It's designed to streamline the job hunting process with personalized recommendations and interactive AI guidance.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/amr-ai/JobHunter-AI"
                        >
                            <p>
                                <b>[GitHub]</b> - JobHunter-AI
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Therapist Chatbot</h2>
                <br />
                <p>
                    Therapist Chatbot is a simple yet effective application designed to provide mental health support using natural language processing and machine learning. It classifies user inputs into predefined intents and responds with empathetic, personalized messages.
                </p>
                <br />
                <p>
                    Built with a neural network model for intent recognition, the chatbot offers an interactive interface for conversations, addressing users by name and providing supportive responses based on training data. Achieved 30% increase in user engagement and 4-second reduction in average response time.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/amr-ai/Psychologist-Chatbot"
                        >
                            <p>
                                <b>[GitHub]</b> - Psychologist-Chatbot
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Head Pose Estimation for Cheating Detection</h2>
                <br />
                <p>
                    This computer vision project detects suspicious head movements during exams using YOLOv8 pose estimation. It tracks head orientation to identify potential cheating, such as prolonged glances in one direction.
                </p>
                <br />
                <p>
                    Optimized for real-time processing with frame skipping and model resizing, it assigns unique IDs to individuals and captures screenshots of detected incidents.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/amr-ai/head-pose-estimation"
                        >
                            <p>
                                <b>[GitHub]</b> - head-pose-estimation
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Egyptian Currency Classification</h2>
                <br />
                <p>
                    This project classifies Egyptian currencies into 9 distinct categories using a pre-trained ResNet50 model in PyTorch, enabling accurate recognition of banknotes.
                </p>
                <br />
                <p>
                    Focused on computer vision for currency identification, it's a foundational ML application demonstrating transfer learning techniques.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/amr-ai/CNN-Classification-Project-using-pytorch"
                        >
                            <p>
                                <b>[GitHub]</b> - CNN-Classification-Project-using-pytorch
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Fall and Violence Detection System</h2>
                <br />
                <p>
                    A real-time surveillance system that detects falls and violent behavior using YOLOv8 for object detection and a CNN model for violence classification.
                </p>
                <br />
                <p>
                    Integrates multiple detection modules for comprehensive monitoring, processing video feeds with annotated outputs for security applications.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/amr-ai/Fall-and-Violence-Detection"
                        >
                            <p>
                                <b>[GitHub]</b> - Fall-and-Violence-Detection
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

export default SoftwareProjects;