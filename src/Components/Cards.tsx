import {
  Card,
  Grid,
  useMantineTheme,
  Image,
  Group,
  Text,
  Badge,
  Button,
} from "@mantine/core";

function getZones(){
    var zoneName: any[] = [];
    fetch('http://jump.javin.io:5000/api/zones')
    .then(response => response.json())
    .then(obj => {
        var zones = obj.data;
        const keys = Object.keys(zones);
        keys.forEach((key) => {
        var zoneID = Object.keys(zones[key]);
        zoneName.push(zones[key][zoneID.toString()].name);
        })
    });
    return zoneName;
}

const zones = getZones();
//console.log(zones);
console.log(zones);



function Cards() {
  const theme = useMantineTheme();
  return (
    <div className="App">
      <Grid justify="space-around">
        <Grid.Col style={{ maxWidth: 300 }} sm={4} xs={4}>
                <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src="./colchuck.png" height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" style={{  lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Book classic tour now
        </Button>
      </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 300 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="./coreEnchantment.jpeg" height={160} alt="Norway" />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 300 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="./image.png" height={160} alt="Norway" />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 300 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="./image.png" height={160} alt="Norway" />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>

        <Grid.Col style={{ maxWidth: 300 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="./image.png" height={160} alt="Norway" />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 300 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="./image.png" height={160} alt="Norway" />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 300 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="./image.png" height={160} alt="Norway" />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 300 }} sm={4} xs={4}>
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="./image.png" height={160} alt="Norway" />
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Cards;
