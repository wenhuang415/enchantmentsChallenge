import {
  Card,
  Grid,
  useMantineTheme,
  Group,
  Text,
  Button,
  Image,
} from "@mantine/core";
import Award from "./Modal";

document.addEventListener("DOMContentLoaded", () => {
  function fetchZones() {
    fetch("http://jump.javin.io:5000/api/zones")
      .then((response) => response.json())
      .then((data) => getZones(data))
      .catch(Error);
  }

  function getZones(zones: any) {
    const keys = Object.keys(zones.data);
    console.log(keys);
    let i = 1;
    keys.forEach((key) => {
      //create a card component to display zone name
      // const gridCol = document.createElement('Grid.Col')
      // gridCol.style{{ paddingTop: 40, maxWidth: 300, minHeight: 400 }} sm={4} xs={4}'


      let textID = "#zone" + i;
      const zone = document.querySelector(textID);
      const text = document.createElement("Text");
      text.innerHTML = zones.data[key][i].name;
      zone?.append(text);
      i++;
    });
  }
  fetchZones();
});

function Cards() {
  const theme = useMantineTheme();
  theme.colorScheme = "light";
  return (
    <div className="App">
      <Grid id="grid1" justify="space-around">
        <Grid.Col
          style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}
          sm={4}
          xs={4}
        >
          <Card color="blue" shadow="sm" p="lg">
            <Card.Section>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5346a846e4b0101b157468cf/1487721949963-CNJL4DDSSV7VRB3HS66Z/15401560621_9c96b7b02a_o.jpg?format=1000w"
                height={160}
                alt="Enchantment Lake"
              />
            </Card.Section>
            
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text id="zone1" weight={500}></Text>
              
            </Group>
            <Award />
          </Card>
        </Grid.Col>

        <Grid.Col
          style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}
          sm={4}
          xs={4}
        >
          <Card color="blue" shadow="sm" p="lg">
            <Card.Section>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5346a846e4b0101b157468cf/1487721949963-CNJL4DDSSV7VRB3HS66Z/15401560621_9c96b7b02a_o.jpg?format=1000w"
                height={160}
                alt="Enchantment Lake"
              />
            </Card.Section>
            
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text id="zone2" weight={500}></Text>
              
            </Group>
            <Award />
          </Card>
        </Grid.Col>

        <Grid.Col
          style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}
          sm={4}
          xs={4}
        >
          <Card color="blue" shadow="sm" p="lg">
            <Card.Section>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5346a846e4b0101b157468cf/1487721949963-CNJL4DDSSV7VRB3HS66Z/15401560621_9c96b7b02a_o.jpg?format=1000w"
                height={160}
                alt="Enchantment Lake"
              />
            </Card.Section>
            
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text id="zone3" weight={500}></Text>
              
            </Group>
            <Award />
          </Card>
        </Grid.Col>

        <Grid.Col
          style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}
          sm={4}
          xs={4}
        >
          <Card color="blue" shadow="sm" p="lg">
            <Card.Section>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5346a846e4b0101b157468cf/1487721949963-CNJL4DDSSV7VRB3HS66Z/15401560621_9c96b7b02a_o.jpg?format=1000w"
                height={160}
                alt="Enchantment Lake"
              />
            </Card.Section>
            
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text id="zone4" weight={500}></Text>
              
            </Group>
            <Award />
          </Card>
        </Grid.Col>

        <Grid.Col
          style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}
          sm={4}
          xs={4}
        >
          <Card color="blue" shadow="sm" p="lg">
            <Card.Section>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5346a846e4b0101b157468cf/1487721949963-CNJL4DDSSV7VRB3HS66Z/15401560621_9c96b7b02a_o.jpg?format=1000w"
                height={160}
                alt="Enchantment Lake"
              />
            </Card.Section>
            
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text id="zone5" weight={500}></Text>
              
            </Group>
            <Award />
          </Card>
        </Grid.Col>

        <Grid.Col
          style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}
          sm={4}
          xs={4}
        >
          <Card color="blue" shadow="sm" p="lg">
            <Card.Section>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5346a846e4b0101b157468cf/1487721949963-CNJL4DDSSV7VRB3HS66Z/15401560621_9c96b7b02a_o.jpg?format=1000w"
                height={160}
                alt="Enchantment Lake"
              />
            </Card.Section>
            
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text id="zone6" weight={500}></Text>
              
            </Group>
            <Award />
          </Card>
        </Grid.Col>

        <Grid.Col
          style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}
          sm={4}
          xs={4}
        >
          <Card color="blue" shadow="sm" p="lg">
            <Card.Section>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5346a846e4b0101b157468cf/1487721949963-CNJL4DDSSV7VRB3HS66Z/15401560621_9c96b7b02a_o.jpg?format=1000w"
                height={160}
                alt="Enchantment Lake"
              />
            </Card.Section>
            
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text id="zone7" weight={500}></Text>
              
            </Group>
            <Award />
          </Card>
        </Grid.Col>

        <Grid.Col
          style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}
          sm={4}
          xs={4}
        >
          <Card color="blue" shadow="sm" p="lg">
            <Card.Section>
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5346a846e4b0101b157468cf/1487721949963-CNJL4DDSSV7VRB3HS66Z/15401560621_9c96b7b02a_o.jpg?format=1000w"
                height={160}
                alt="Enchantment Lake"
              />
            </Card.Section>
            
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text id="zone8" weight={500}></Text>
              
            </Group>
            <Award />
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Cards;
