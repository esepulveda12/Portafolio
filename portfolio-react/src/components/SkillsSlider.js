import React, { useState } from 'react';
import './SkillsSlider.css';
import { SiFigma, SiAdobeillustrator, SiAdobephotoshop, SiJavascript, SiDocker, SiPhp, SiDotnet, SiMongodb, SiHtml5, SiMysql, SiPython, SiFlutter } from 'react-icons/si';

const skills = [
	{ name: 'HTML', iconComponent: SiHtml5, brandColor: '#E34F26' },
	{ name: 'JavaScript', iconComponent: SiJavascript, brandColor: '#F7DF1E' },
	{ name: 'Docker', iconComponent: SiDocker, brandColor: '#2496ED' },
	{ name: 'PHP', iconComponent: SiPhp, brandColor: '#777BB4' },
	{ name: 'MySQL', iconComponent: SiMysql, brandColor: '#4479A1' },
	{ name: 'MongoDB', iconComponent: SiMongodb, brandColor: '#47A248' },
	{ name: 'Python', icon: '/sliderapp/python.png'},
	{ name: 'Flutter', icon: '/sliderapp/flutter.png' },
	{ name: 'Figma', iconComponent: SiFigma, gradient: 'linear-gradient(90deg, #F24E1E, #A259FF, #1ABCFE, #0ACF83, #3776AB)', maskImage: '/sliderapp/Figma-logo.png' },
	{ name: 'Illustrator', iconComponent: SiAdobeillustrator, brandColor: '#FF7C00' },
	{ name: 'Photoshop', iconComponent: SiAdobephotoshop, brandColor: '#31A8FF' },
	{ name: 'VS Code', icon: '/sliderapp/visual.png' },
	{ name: 'Coding', icon: '/sliderapp/codificacion.png' }
];

const SkillsSlider = () => {
	const [coloredSkills, setColoredSkills] = useState(new Set());

	const toggleColor = (skillName) => {
		setColoredSkills((prev) => {
			const next = new Set(prev);
			if (next.has(skillName)) {
				next.delete(skillName);
			} else {
				next.add(skillName);
			}
			return next;
		});
	};

	return (
		<section className="skills-slider">
			<div className="skills-container">
				{[...skills, ...skills].map((skill, index) => {
					const Icon = skill.iconComponent;
					const isActive = coloredSkills.has(skill.name);
					return (
						<div
							className={`skill-item${Icon ? ' skill-clickable' : ''}`}
							key={`${skill.name}-${index}`}
							onClick={Icon ? () => toggleColor(skill.name) : undefined}
							onKeyDown={Icon ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleColor(skill.name); } } : undefined}
							tabIndex={Icon ? 0 : -1}
							role={Icon ? 'button' : undefined}
							style={Icon ? { ['--brand-color']: skill.brandColor } : undefined}
						>
							{Icon ? (
								skill.gradient && skill.maskImage ? (
									<div className="icon-stack">
										<Icon className="skill-svg" />
										<div
											className="skill-gradient"
											style={{
												background: skill.gradient,
												WebkitMaskImage: `url(${skill.maskImage})`,
												maskImage: `url(${skill.maskImage})`
											}}
										/>
									</div>
								) : (
									<Icon className="skill-svg" style={{ color: isActive ? (skill.brandColor || '#ffffff') : undefined }} />
								)
							) : (
								<img
									src={skill.icon}
									alt={skill.name}
									className="skill-icon"
								/>
							)}
							<span className="skill-name">{skill.name}</span>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default SkillsSlider;


