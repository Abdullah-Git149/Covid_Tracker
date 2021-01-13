import React from 'react';
import './App.css'

class Countries extends React.Component {
    render() {
        const { countries } = this.props;
        return (
     
            
                    <tr>
                        <td>{countries.Country}</td>
                        <td>{countries.NewConfirmed}</td>
                        <td>{countries.TotalRecovered}</td>
                        <td>{countries.TotalDeaths}</td>
                    </tr>
              


         
        );
    }
}

export default Countries;