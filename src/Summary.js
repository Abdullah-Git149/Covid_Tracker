import React from 'react';


class Summary extends React.Component {
    render() {
        const { summary, currentDate } = this.props
        return (
            <div className="row">
                <div className="NewConfirmed">
                    <h2>New Confirmed</h2>
                    <h4>{summary.NewConfirmed}</h4>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div className="totalConfirmed">
                    <h2>Total Confirmed</h2>
                    <h4>{summary.TotalConfirmed}</h4>
                    <h4>{new Date(currentDate).toDateString()}</h4>

                </div>
                <div className="newDeath">
                    <h2>New Deaths</h2>
                    <h4>{summary.NewDeaths}</h4>
                    <h4>{new Date(currentDate).toDateString()}</h4>

                </div>

                <div className="totalDeath">
                    <h2>Total Deaths</h2>
                    <h4>{summary.TotalDeaths}</h4>
                    <h4>{new Date(currentDate).toDateString()}</h4>

                </div>

                <div className="totalRecover">
                    <h2>New Recovered</h2>
                    <h4>{summary.TotalRecovered}</h4>
                    <h4>{new Date(currentDate).toDateString()}</h4>

                </div>
            </div>

        );
    }
}

export default Summary;