import {
  Card,
  Grid,
  useMantineTheme,
  Image,
  Group,
  Text,
  Badge,
  Button,
  CardSection,
} from "@mantine/core";

/*
function getZones(){
    var zoneName: any[] = [];
    fetch('http://jump.javin.io:5000/api/zones')
    .then(response => response.json())
    .then(obj => {
        //console.log(obj);
        var zones = obj.data;
        const keys = Object.keys(zones);
        //console.log(zones[index][index+1].name)
        //console.log(keys);
        keys.forEach((key) => {
          var zoneID = Object.keys(zones[key]);
          zoneName.push(zones[key][zoneID.toString()].name);
          //console.log(zones[key][zoneID.toString()].name);
        })
        
    })
    .catch(Error);
    return zoneName;
}
*/


async function getZones() {
  const response = await fetch("http://jump.javin.io:5000/api/zones");
  const zones = await response.json();
  //console.log(zones.data[index][index+1].name)
  //return zones.data[index][index+1].name;
  return zones;
}
//var zones = getZones(0);
//console.log(zones);

function Cards() {
  const theme = useMantineTheme();
  theme.colorScheme = 'light';
  return (
    <div className="App">
      <Grid justify="space-around">
        <Grid.Col style={{paddingTop: 40, maxWidth: 300,minHeight:400 }} sm={4} xs={4}>
          <Card color="blue" shadow="sm" p="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Get Award Data
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{paddingTop: 40, maxWidth: 300,minHeight:400 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>


            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Get Award Data
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{paddingTop: 40, maxWidth: 300,minHeight:400 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>


            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Get Award Data
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{paddingTop: 40, maxWidth: 300,minHeight:400 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>



            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Get Award Data
            </Button>
          </Card>
        </Grid.Col>

        <Grid.Col style={{paddingTop: 40, maxWidth: 300,minHeight:400 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>



            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Get Award Data
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{paddingTop: 40, maxWidth: 300,minHeight:400 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>


            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Get Award Data
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{paddingTop: 40, maxWidth: 300,minHeight:400 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>


            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Get Award Data
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ paddingTop: 40,maxWidth: 300,minHeight:400 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>


            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Get Award Data
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Cards;
