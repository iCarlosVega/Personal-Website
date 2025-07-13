import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './home.css';

function Home(){
    return (
    <div className='Home'>
        <ProjectCard 
            link="https://github.com/iCarlosVega/Centrality_In_the_MTA" 
            imgSrc='../../images/map.jpeg' 
            imgAlt='MTA Map' 
            title='Centrality In the MTA' 
            info='Performed a centrality analysis of the MTA, 
                    determining the most important stations in the city 
                    based on betweeness, closeness and degree.'/>
        <ProjectCard 
            link="https://github.com/iCarlosVega/House_Pricing_Model" 
            imgSrc='../../images/regression_tree_top_layers.jpg' 
            imgAlt='Regression tree' 
            title='House Pricing Prediction' 
            info='Developed a Model to predict NYC Housing Data 
                    implementing a random forest whiched yielded in a 50,000$ 
                    margin of error for prediction.'/>
        <ProjectCard 
            link='https://qclip.study/' 
            imgSrc='qclip.png' 
            imgAlt='Screenshot' 
            title='Ai Admissions Assistant' 
            info='Collaborated with my colleagues in developming an 
                    Ai Admissions Assistant for our school as a hackathon project.'/>
        <ProjectCard 
            link='https://qcphysicsclub.com' 
            imgSrc='qcphysics.png' 
            imgAlt='Screenshot' 
            title='Queens College Physics Website' 
            info='Developed an informative website for my physics club 
                    @ Queens College'/>
    </div>
    );    
}

export default Home;
