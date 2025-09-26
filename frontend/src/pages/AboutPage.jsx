import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-container">
          <h1 className="about-title">About This Project</h1>
          
          <div className="about-divider about-divider-small"></div>
          
          <div className="about-text">
            <p>
              Vitis Veritas is an open-source, free tool designed for wine enthusiasts, students, 
              and professionals who want a deeper understanding of the Willamette Valley terroir. 
              This comprehensive web application dives deep into the science behind what makes 
              this Oregon region so exceptional for wine production, combining geological data, 
              soil analysis, and climate information to create a complete picture of the valley's 
              diverse wine-growing conditions.
            </p>
            
            <div className="about-divider"></div>
            
            <p>
              I created this project out of my own curiosity about specific terroir information 
              that I found surprisingly difficult to access in one place. As someone passionate 
              about understanding the intricate relationship between land and wine, I discovered 
              that while information exists, it's often scattered across academic papers, 
              government databases, and various wine industry resources. The goal was to synthesize 
              this wealth of knowledge into an accessible, interactive format that tells the 
              complete story of Willamette Valley terroir.
            </p>
            
            <div className="about-divider"></div>
            
            <p>
              Beyond satisfying scientific curiosity, this tool serves a practical purpose for 
              planning winery and vineyard visits. I wanted to create a single, comprehensive 
              resource that would allow wine tourists and enthusiasts to plan trips with a deeper 
              understanding of what they're experiencing. Most existing resources only feature 
              a limited selection of wineries and vineyards, often missing many excellent 
              locations and failing to represent the Willamette Valley as a complete ecosystem. 
              This application aims to be truly comprehensive, covering all wineries and 
              vineyards with any online presence throughout the entire valley.
            </p>
            
            <div className="about-divider"></div>
            
            <p>
              The vision behind Vitis Veritas is to demonstrate how the land itself shapes the wine. 
              Through detailed visualizations of soil types, elevation changes, climate patterns, 
              and geological formations, users can see exactly why wines from different parts of 
              the valley express such distinct characteristics. This isn't just about where wineries 
              are located – it's about understanding the fundamental forces of nature that influence 
              every glass of Willamette Valley wine, from the volcanic soils of the Dundee Hills 
              to the sedimentary deposits of the valley floor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;