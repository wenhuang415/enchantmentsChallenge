import { useState } from "react";
import {
  Card,
  Grid,
  useMantineTheme,
  Group,
  Text,
  Image,
  Modal,
  Button,
  ScrollArea,
} from "@mantine/core";

function getAward(id:number) {
  console.log(id);
}

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
    //display the zone names on the cards
    keys.forEach((key) => {
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

const awardsData =
  "Charizard description from BulbapediaCharizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames.";

function Cards() {
  const theme = useMantineTheme();
  theme.colorScheme = "dark";
  const [opened, setOpened] = useState(false);

  return (
    <div className="App">
      <Modal opened={opened} onClose={() => setOpened(false)} title="ZONE NAME">
        {<ScrollArea style={{ height: 550 }}>{awardsData}</ScrollArea>}
      </Modal>
      <Grid id="grid1" justify="space-around">
        <Grid.Col style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}>
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
            <>
              <Group position="center">
                <Button onClick={() => {setOpened(true); getAward(1)}}>Awards</Button>
              </Group>
            </>
          </Card>
        </Grid.Col>

        <Grid.Col style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}>
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
            <Button onClick={() => {setOpened(true); getAward(2)}}>Awards</Button>
          </Card>
        </Grid.Col>

        <Grid.Col style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}>
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
            <Button onClick={() => {setOpened(true); getAward(3)}}>Awards</Button>
          </Card>
        </Grid.Col>

        <Grid.Col style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}>
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
            <Button onClick={() => {setOpened(true); getAward(4)}}>Awards</Button>
          </Card>
        </Grid.Col>

        <Grid.Col style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}>
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
            <Button onClick={() => {setOpened(true); getAward(5)}}>Awards</Button>
          </Card>
        </Grid.Col>

        <Grid.Col style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}>
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
            <Button onClick={() => {setOpened(true); getAward(6)}}>Awards</Button>
          </Card>
        </Grid.Col>

        <Grid.Col style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}>
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
            <Button onClick={() => {setOpened(true); getAward(7)}}>Awards</Button>
          </Card>
        </Grid.Col>

        <Grid.Col style={{ paddingTop: 40, maxWidth: 300, minHeight: 500 }}>
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
            <Button onClick={() => {setOpened(true); getAward(8)}}>Awards</Button>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Cards;
