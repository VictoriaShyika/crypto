import {ReferralData, ReferralStatistic} from "../constants/referral"
import {onCopy} from "../helpers"

export const Referrals = () => {

  return (
	<div className="referral">
		<div className="referral__block block referral__info-container">
			<h1>Invite friends and earn more points</h1>

			<div className="referral__info">
				{ReferralData.map((item => (
					<div className="referral__info-content" key={item.title}>
						<p className="referral__info-title">{item.title}</p>
            
						<div className="referral__info-block">
							<div className="referral__info-data">{item.content}</div>
							<div className="referral__info-copy" onClick={() => {onCopy(item.content, item.title)}} />
						</div>
					</div>)))}
			</div>

			<p className="referral__description">Describe the conditions of the referral system. The referral receives a percentage of his friend’s point earnings. Describe the conditions of the referral system. The referral receives a percentage of his friend’s point earningsreferral system. The referral receives a percentage of his friend’s point earningsreferral system. The referral receives a percentage of his friend’s point earnings</p>

		</div>

		<div className="referral__block">
			{ReferralStatistic.map((item) => (
				<div className={`referral__statistic block item-${item.color}`} key={item.title} style={{backgroundImage: `url(${item.image})`}}>
					<p>{item.title}</p>
					<div>
						<span className="referral__statistic-value">{item.value}</span>
						<span className="referral__statistic-parameter">{item.parameter}</span>
					</div>
			</div>))}
			
		</div>
	</div>
  )
}
