import { Page, Card, Text } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function Dashboard() {
  return (
    <Page>
      <TitleBar title="Dashboard" />
      <Card sectioned>
        <Text as="p">👋 This is your CarbonPrint dashboard placeholder.</Text>
      </Card>
    </Page>
  );
}
