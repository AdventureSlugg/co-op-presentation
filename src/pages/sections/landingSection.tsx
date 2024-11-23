import '@/styles/globals.css';
import '@/styles/landing-section.css';
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code()

export default function LandingSection() {
	return (
		<div id='landing-section'>
			<div className={'terminal ' + firaCode.className}>
				<div className='terminal-header'>
					<svg height={20} width={20}>
						<circle cx={10} cy={10} r={10} fill="#FF3E3E" />
					</svg>
					<svg height={20} width={20}>
						<circle cx={10} cy={10} r={10} fill="#FFCB3E" />
					</svg>
					<svg height={20} width={20}>
						<circle cx={10} cy={10} r={10} fill="#3FEB6D" />
					</svg>
				</div>
				<div className='terminal-content'>
					zoebingham@honeywell % cd Experiences/
				</div>
			</div>
		</div>
	)
}