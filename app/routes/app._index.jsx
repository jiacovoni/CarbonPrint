import { Page, Card, Text, Button } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
 /app  → app/routes/app._index.jsx
cat > app/routes/app._index.jsx <<'EOF'
import { Page, Card, Text, Button } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function AppHome() {
  return (
    <Page>
      <TitleBar title="Welcome to CarbonPrint" />
      <Card sectioned>
        <Text as="p">
          Calculate and visualize your store’s carbon footprint in seconds.
        </Text>
      </Card>
      <Button url="/app/dashboard" primary>
        View Dashboard
      </Button>
    </Page>
  );
}
