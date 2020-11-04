import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


export default () => {
    const projectsSection = useRef(null)
    return <>

        <div className="p-12 flex-1 min-h-screen flex justify-center items-center flex-col">
            <img alt="profile-pic" src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" className="rounded-full w-64 mb-4 shadow-2xl object-contain" />
            <h1 className="text-4xl font-bold text-purple-500">Parag Khodke</h1>
            <h2 className="text-gray-700 font-semibold mb-4">Data Scientist Enthusiastic and Passionate Full Stack Developer</h2>
            <p>Looking for a full time Starts from December. anticipated Graduation is DEC 2020, with Masters in Computer Science degree.
                Strong engineering background With a Bachelor of Technology (B.Tech) Major in computer science from Vishwakarma institute of technology, Pune India.
            </p>
            <button onClick={() => projectsSection?.current.scrollIntoView({ behavior: 'smooth' })} className="px-3 py-3 rounded-lg bg-purple-700 mt-6 text-white">View My Projects</button>
        </div>
"

        <div ref={projectsSection} className="p-12 flex-1 min-h-screen flex justify-center items-start flex-col">
            <h1 className="text-4xl font-bold text-purple-500 self-center mb-12">My Projects</h1>
            <div className="flex space-x-3 overflow-auto">

                <img alt="project-pic-1" className="xl:w-1/3 lg:w-1/2 sm:w-full rounded-lg shadow-xl mb-8" src="https://www.seasiainfotech.com/blog/wp-content/uploads/2017/09/ecommerce-e1504780652321.jpg" />


                {/*<img alt="project-pic-1" className="xl:w-1/3 lg:w-1/2 sm:w-full rounded-lg shadow-xl mb-8" src="https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />*/}
                {/* <img alt="project-pic-2" className="xl:w-1/3 lg:w-1/2 sm:w-full rounded-lg shadow-xl mb-8" src="https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                <img alt="project-pic-3" className="xl:w-1/3 lg:w-1/2 sm:w-full rounded-lg shadow-xl mb-8" src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /> */}
            </div>

            <h1 className="text-4xl font-bold text-purple-500 mb-6">Ecommerce Web Application</h1>
            <p className="mb-4">
                Independently develop Python Django web application using MVT/MVC
            </p>
            Technology Stack Used: |Python |Django | REST | MYSQL | AWS | Heroku | HTML | CSS | bootstrap | JavaScript | jQuery
            <h2 className="text-3xl font-bold text-purple-500 mb-4">Feature of Web Applications</h2>
            <p>
                <li>User can search products</li>
                <li>developed add to cart functionality</li>
                <li>user can give reviews about products</li>
                <li>Multiple user authentication developed</li>
                <li>Admin can create various groups about products and can see report back for purchase products</li>
                <li>Use of Mail gun API for email confirmation and payment gateway using stripe API and later deploy on AWS and Heroku</li>
                <li>USer can purchase online products. different Model, View, templates, Forms</li>
            </p>
            <br></br>
            <a href="http://ecommerceparag.herokuapp.com"><strong>Project Links</strong></a>
            {/*<Link to="http://ecommerceparag.herokuapp.com/" className="text-purple-500">Project Link... </Link>*/}
        </div>
    </>
}
