import React, { useState } from 'react';
import incidents from './data/incidents.js'
import { Container, Columns, Heading, Notification, Card, Form, Button } from 'react-bulma-components';
const { Input } = Form;

const IncidentDetail = ({ incident, closeClicked }) => {
  return (
    <div>
      <Heading size="3">{incident.title}</Heading>
      <p>{incident.text}</p><br />
      <Button color="light" size="small" onClick={closeClicked}>Close</Button>
    </div>
  )
}

const Incident = ({ incident, incidentClicked }) => {
  return (
    <Card>
      <Card.Content>
        <Heading size="6" className="mb-1">{incident.title}</Heading>
        {incident.shortText}
        <Button className="is-pulled-right" color="primary" size="small" onClick={() => { incidentClicked(incident) }}>View details</Button>
      </Card.Content>
    </Card>
  )
}

function App() {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [filterTerm, setFilterTerm] = useState("");
  const incidentsToShow = incidents.filter(incident => {
    return filterTerm === "" || incident.title.includes(filterTerm);
  })
  const nothingToShow = () => {
    return (
      <Notification color="warning">
        Nothing to show
      </Notification>
    )
  }
  return (
    <Container>
      <Columns>
        <Columns.Column>
          <Input placeholder="Search..." className="mb-4" onChange={(e) => setFilterTerm(e.target.value)} />
          <div className="incidents">
            {incidentsToShow.length > 0 && incidentsToShow.map(incident => {
              const props = {
                key: incident.id,
                incident,
                incidentClicked: (incident) => setSelectedIncident(incident)
              }
              return (<Incident {...props} />)
            })}
            {incidentsToShow.length === 0 && nothingToShow()}
          </div>
        </ Columns.Column>
        {selectedIncident &&
          <Columns.Column>
            <IncidentDetail incident={selectedIncident} closeClicked={() => setSelectedIncident(null)} />
          </ Columns.Column>
        }
      </Columns>
    </Container>
  );
}

export default App;
