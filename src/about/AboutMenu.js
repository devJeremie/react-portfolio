import React, {Component} from 'react';
import AboutMenuItem from "./AboutMenuItem";
import AboutSubHeading from "./AboutSubHeading";
import subHeadingData from "./subHeadingData";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";

export default class AboutMenu extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
    activeMenuItem: 1, // Tracks the active menu item
    activeSubheading: 1, // Tracks the active subheading
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubHeading: 1,
    });
  };
  handleSubHeadingClick = (subHeading) => {
    this.setState({
      activeSubHeading: subHeading,
    });
  };


  render() {
    const { activeMenuItem, activeSubHeading } = this.state;
    const menuItems = ["PERSONAL", "EDUCATION", "CAREER"];
    const activeMenuTitle = menuItems[activeMenuItem - 1];
    const activeMenuIcon = 
      activeMenuTitle === "PERSONAL" ? personalIcon : activeMenuTitle
      === "EDUCATION" ? educationIcon : careerIcon;

    const subHeadings = subHeadingData[activeMenuItem];

    return (
      <>
        <div className='menu'>
          {menuItems.map((item, index) => (
            <AboutMenuItem
            key={index}
            title={item}
            active={activeMenuItem === index + 1}
            onClick={() => this.handleMenuItemClick(index + 1)}
            />
          ))}
        </div>
        <div className='sub-container'>
          <div className='icon-title-container'>
            <img src={activeMenuIcon} alt={activeMenuTitle}
              className='icon' />
              <h3>{activeMenuTitle}</h3>
          </div>
        {subHeadings.map((subheading, index) => (
          <AboutSubHeading
          key={index}
          title={subheading.title}
          content={subheading.content}
          active={activeSubHeading === index + 1}
          onClick={() => this.handleSubHeadingClick(index + 1)}
          menuItem={activeMenuItem}
          />
        ))}
      </div>
    </>
    );
  }
}
