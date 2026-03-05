const { useState } = React;

const _B = ["Moon","Pay"];
const MP = _B.join("").toLowerCase();
const MPC = _B.join("");
const MPURL = "https://" + MP + ".hel.io";

const P = "#7c3aed", P2 = "#a855f7", PL = "#c4b5fd", PLL = "#e2d9f3";
const PBG = "rgba(124,58,237,0.06)", PBG2 = "rgba(124,58,237,0.12)";
const PBR = "rgba(124,58,237,0.2)", PBR2 = "rgba(124,58,237,0.3)";
const GRAY = "#9ca3af", GRAY2 = "#6b7280", GRAYLT = "#d1d5db";
const BG = "#0f0b1a", BG2 = "#1a1035", DARK = "#0d1117";
const CB = "background:rgba(124,58,237,0.12);padding:2px 6px;border-radius:4px;font-size:13px";

const STYLES = [
  { id: "headless", label: "Fully Headless", desc: "API only — build your own UI", icon: "⚡" },
  { id: "modal", label: "Pre-built Modal", desc: "Embed our widget in a modal overlay", icon: "🪟" },
  { id: "standalone", label: "Standalone Widget", desc: "Drop-in embedded widget", icon: "📦" },
  { id: "iframe", label: "Iframe Embed", desc: "Simple iframe integration", icon: "🔲" },
];

const GoI = ({size=28}) => <svg viewBox="0 0 120 120" width={size} height={size}><ellipse cx="60" cy="60" rx="56" ry="56" fill="#00ADD8"/><text x="60" y="72" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="42" fill="#fff">Go</text></svg>;
const NodeI = ({size=28}) => <svg viewBox="0 0 120 120" width={size} height={size}><circle cx="60" cy="60" r="56" fill="#339933"/><text x="60" y="72" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="32" fill="#fff">N.js</text></svg>;
const ReactI = ({size=28}) => <svg viewBox="0 0 120 120" width={size} height={size}><circle cx="60" cy="60" r="56" fill="#23272F"/><ellipse cx="60" cy="60" rx="40" ry="16" fill="none" stroke="#61DAFB" strokeWidth="3"/><ellipse cx="60" cy="60" rx="40" ry="16" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 60 60)"/><ellipse cx="60" cy="60" rx="40" ry="16" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(120 60 60)"/><circle cx="60" cy="60" r="6" fill="#61DAFB"/></svg>;
const SvelteI = ({size=28}) => <svg viewBox="0 0 120 120" width={size} height={size}><circle cx="60" cy="60" r="56" fill="#FF3E00"/><text x="60" y="72" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="38" fill="#fff">S</text></svg>;
const JSI = ({size=28}) => <svg viewBox="0 0 120 120" width={size} height={size}><rect x="4" y="4" width="112" height="112" rx="12" fill="#F7DF1E"/><text x="60" y="78" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="48" fill="#323330">JS</text></svg>;

function LI({ icon, size=28 }) {
  const m = { cg: GoI, cn: NodeI, cr: ReactI, cs: SvelteI, cj: JSI };
  const C = m[icon];
  return C ? <C size={size}/> : <span style={{fontSize:size}}>{icon}</span>;
}

const BK_LANGS = [
  { id: "go", label: "Go", icon: "cg" },
  { id: "node", label: "Node.js", icon: "cn" },
];
const FE_LANGS = [
  { id: "react", label: "React", icon: "cr" },
  { id: "svelte", label: "Svelte", icon: "cs" },
  { id: "vanilla", label: "Vanilla JS", icon: "cj" },
];
const LANGS = [...BK_LANGS, ...FE_LANGS];

const LNK = {
  docs: "https://docs.hel.io/docs/deposits",
  gs: "https://docs.hel.io/reference/getting-started-1",
  dui: "https://docs.hel.io/docs/deposits#3-build-your-own-or-serve-our-deposit-ui-in-your-app",
  dash: MPURL + "/",
  cc: "https://docs.hel.io/reference/depositcontroller_createcustomer-1",
  uc: "https://docs.hel.io/reference/depositcontroller_updatecustomer-1",
  gc: "https://docs.hel.io/reference/depositcontroller_getcustomer-1",
  ra: "https://docs.hel.io/reference/depositcontroller_recordactivity-1",
  cur: "https://docs.hel.io/reference/currencycontroller_getdepositcurrencies-1",
  atx: "https://docs.hel.io/reference/depositcontroller_getalltransactions",
  ctx: "https://docs.hel.io/reference/depositcontroller_getcustomertransactions",
  wh: "https://docs.hel.io/reference/deposithookcontroller_createdeposithook-1",
  cd: "https://docs.hel.io/reference/depositcontroller_createdeposit-1",
  tos: "https://docs.hel.io/docs/terms-of-service",
  npm: "https://www.npmjs.com/package/@heliofi/deposit-react",
  sc: "https://console.swaps.xyz",
  sd: "https://docs.swaps.xyz",
  demo: MPURL + "/deposit/53d06d62-f758-4155-8eb9-fbecabeba064",
  denv: "https://demo.hel.io",
};

var defined = "defined";
var Anc = function(h, t) { return '<a href="' + h + '" target="_blank" rel="noopener" style="color:' + PL + ';text-decoration:none;border-bottom:1px solid rgba(124,58,237,0.3)">' + t + '</a>'; };
var Cd = function(t) { return '<code style="' + CB + '">' + t + '</code>'; };

var STEPS = [
  "Log in to the " + Anc(LNK.dash, MPC + " Commerce Crypto Deposit Dashboard"),
  "Obtain your " + Anc(LNK.gs, MPC + " Commerce API keys") + " via the <strong>Developer</strong> tab",
  "Hit Create Payment → Deposit and specify the blockchain and currency (e.g. SOL on Solana) to generate your " + Cd("depositId"),
  "Use your API key, " + Cd("depositId") + " and your own unique " + Cd("customerId") + " and " + Cd("recipientPublicKeys") + " to generate unique " + Anc(LNK.cc, "deposit customers via the API") + " and associated deposit addresses across SVM, EVM & BTC",
  "Serve the " + Anc(LNK.dui, "deposit UI") + " in your app. For a headless set up, simply serve the " + Cd("depositWallets") + " via your own UI",
  Anc(LNK.wh, "Implement webhooks") + " to confirm transactions on your backend and credit the user's in-app balance accordingly",
  "Use endpoints to fetch deposit transaction data: " + Anc(LNK.atx, "by Deposit ID") + " or " + Anc(LNK.ctx, "by customer token"),
  "Review and agree to the " + Anc(LNK.tos, MPC + " Commerce terms of service") + ". If you are an existing or new " + MPC + " Ramps customer, you can also easily add MPC services to your MSA via a simple order form, as well as access the MPC dashboard directly via your MP partner dash login.",
];

var SUB = {
  3: ["Store the Deposit Customer token to reuse it for repeat deposits for the same " + Cd("customerId") + ". You can also use the " + Anc(LNK.uc, "Update Deposit Customer") + " and " + Anc(LNK.gc, "Get Deposit Customer") + " endpoints as needed (use the latter to get the " + Cd("depositWallets") + " array)."],
  4: [
    "When " + MPC + " Commerce detects balance and auto-bridges/swaps the crypto to your preferred currency & recipient wallet",
    "Use the " + Anc(LNK.ra, "Record Wallet Activity endpoint") + " whenever you display a deposit wallet to a customer",
    "Use the " + Anc(LNK.cur, "Get Currencies endpoint") + " to display all the supported tokens + networks",
  ],
  5: ["Webhooks can be created directly in the Dashboard under <strong>Developer</strong>, or via the " + Anc(LNK.wh, "Create a Deposit Webhook endpoint")],
};

var WS = [
  { n: 1, t: "Create an account at " + Anc(LNK.sc, "console.swaps.xyz") + '<br/><div style="margin-left:20px;margin-top:4px;font-size:13px;color:' + GRAY + '">a. You can share access with team members in your organization in the Settings tab of the console<br/>b. Once you have volume moving through the APIs you will be able to track transactions in the Transaction tab of the console, too</div>' },
  { n: 2, t: "Generate an API key" },
  { n: 3, t: "Create a swap (withdrawal) via API" + '<br/><div style="margin-left:20px;margin-top:4px;font-size:13px;color:' + GRAY + '">Using the ' + Anc(LNK.sd, "Swap documentation") + ' as a reference, you can embed a swap, or "withdrawal" for a user. Can set up tracking of transaction status via API or webhook.</div>' },
];

var WSW = "A withdrawal is created by initiating a swap (" + Anc(LNK.sd, "docs here") + '):<br/><br/><div style="margin-left:8px;line-height:2">• <strong>Source wallet</strong> → Your platform wallet (e.g., user\'s custodial wallet)<br/>• <strong>Destination wallet</strong> → User-input external wallet address<br/>• Hardcode the source wallet<br/>• Allow the user to input the destination address in your frontend</div><br/>Use API responses to:<br/><div style="margin-left:8px;line-height:2">• Show confirmation screen<br/>• Display fees<br/>• Trigger the transaction<br/>• Poll for status updates</div><br/>Because this is API-based, you retain full control of the frontend experience.';

var WBP = [
  '<strong>Destination Wallet Input</strong> — Allow users to paste a wallet address.<br/><div style="margin-left:20px;margin-top:4px;font-size:13px;color:' + GRAY + '">Recommended: Address format validation, Chain compatibility validation</div>',
  '<strong>Chain Compatibility Disclaimer</strong> — Include a clear warning:<br/><div style="margin-left:20px;margin-top:4px;font-size:13px;color:' + GRAY + '"><em>"Ensure the destination wallet supports the selected network. Sending funds to an incompatible network may result in permanent loss."</em></div>',
  '<strong>Real-Time Transaction Feedback</strong> — Use polling or webhooks to trigger:<br/><div style="margin-left:20px;margin-top:4px;font-size:13px;color:' + GRAY + '">Toast Notifications, Progress indicators, Blockchain Explorer links</div>',
];

// ── GO CODE ──
var BT = "\u0060";

var G1 = "package commerce\n\nimport (\n    \"bytes\"\n    \"encoding/json\"\n    \"fmt\"\n    \"io\"\n    \"net/http\"\n    \"time\"\n)\n\nconst baseURL = \"https://api.hel.io/v1\"\n\ntype Client struct {\n    apiKey     string\n    apiSecret  string\n    httpClient *http.Client\n}\n\nfunc NewClient(apiKey, apiSecret string) *Client {\n    return &Client{\n        apiKey:    apiKey,\n        apiSecret: apiSecret,\n        httpClient: &http.Client{Timeout: 30 * time.Second},\n    }\n}\n\nfunc (c *Client) doRequest(method, rawURL string, body any, target any) error {\n    var reqBody io.Reader\n    if body != nil {\n        b, err := json.Marshal(body)\n        if err != nil {\n            return fmt.Errorf(\"marshalling request body: %w\", err)\n        }\n        reqBody = bytes.NewReader(b)\n    }\n    req, err := http.NewRequest(method, rawURL, reqBody)\n    if err != nil {\n        return fmt.Errorf(\"creating request: %w\", err)\n    }\n    req.Header.Set(\"Authorization\", \"Bearer \"+c.apiSecret)\n    req.Header.Set(\"Content-Type\", \"application/json\")\n    q := req.URL.Query()\n    q.Set(\"apiKey\", c.apiKey)\n    req.URL.RawQuery = q.Encode()\n\n    resp, err := c.httpClient.Do(req)\n    if err != nil {\n        return fmt.Errorf(\"executing request: %w\", err)\n    }\n    defer resp.Body.Close()\n    if resp.StatusCode < 200 || resp.StatusCode >= 300 {\n        respBody, _ := io.ReadAll(resp.Body)\n        return fmt.Errorf(\"API error (status %d): %s\", resp.StatusCode, string(respBody))\n    }\n    if target != nil {\n        if err := json.NewDecoder(resp.Body).Decode(target); err != nil {\n            return fmt.Errorf(\"decoding response: %w\", err)\n        }\n    }\n    return nil\n}";

var G2 = "type CreateCustomerRequest struct {\n    DepositID           string  " + BT + "json:\"depositId\"" + BT + "\n    CustomerID          string  " + BT + "json:\"customerId\"" + BT + "\n    RecipientPublicKeys []string " + BT + "json:\"recipientPublicKeys\"" + BT + "\n    AdditionalJSON      *string " + BT + "json:\"additionalJSON,omitempty\"" + BT + "\n}\n\ntype CreateCustomerResponse struct {\n    Token          string          " + BT + "json:\"token\"" + BT + "\n    DepositWallets []DepositWallet " + BT + "json:\"depositWallets\"" + BT + "\n}\n\ntype DepositWallet struct {\n    ID               string          " + BT + "json:\"id\"" + BT + "\n    PublicKey        string          " + BT + "json:\"publicKey\"" + BT + "\n    BlockchainEngine json.RawMessage " + BT + "json:\"blockchainEngine\"" + BT + "\n}\n\nfunc (c *Client) CreateCustomer(req CreateCustomerRequest) (*CreateCustomerResponse, error) {\n    url := fmt.Sprintf(\"%s/deposit-customers/api-key\", baseURL)\n    var resp CreateCustomerResponse\n    if err := c.doRequest(http.MethodPost, url, req, &resp); err != nil {\n        return nil, fmt.Errorf(\"creating deposit customer: %w\", err)\n    }\n    return &resp, nil\n}";

var G3 = "func (c *Client) GetCustomer(token string) (*CreateCustomerResponse, error) {\n    url := fmt.Sprintf(\"%s/deposit-customers/%s/api-key\", baseURL, token)\n    var resp CreateCustomerResponse\n    if err := c.doRequest(http.MethodGet, url, nil, &resp); err != nil {\n        return nil, fmt.Errorf(\"getting deposit customer: %w\", err)\n    }\n    return &resp, nil\n}";

var G4 = "func (c *Client) RecordWalletActivity(customerToken string) error {\n    url := fmt.Sprintf(\"%s/deposit-wallet/token/%s/activity\", baseURL, customerToken)\n    if err := c.doRequest(http.MethodPost, url, nil, nil); err != nil {\n        return fmt.Errorf(\"recording wallet activity: %w\", err)\n    }\n    return nil\n}\n\nfunc (c *Client) RecordWalletActivityByKeys(publicKeys []string) error {\n    url := fmt.Sprintf(\"%s/deposit-wallet/activity\", baseURL)\n    body := map[string][]string{\"wallets\": publicKeys}\n    if err := c.doRequest(http.MethodPost, url, body, nil); err != nil {\n        return fmt.Errorf(\"recording wallet activity by keys: %w\", err)\n    }\n    return nil\n}";

var G5 = "func (c *Client) GetDepositCurrencies() ([]map[string]any, error) {\n    url := fmt.Sprintf(\"%s/currency/deposit\", baseURL)\n    var resp []map[string]any\n    if err := c.doRequest(http.MethodGet, url, nil, &resp); err != nil {\n        return nil, fmt.Errorf(\"getting deposit currencies: %w\", err)\n    }\n    return resp, nil\n}";

var G6 = "type WebhookPayload struct {\n    Event                         string          " + BT + "json:\"event\"" + BT + "\n    DepositID                     string          " + BT + "json:\"depositId\"" + BT + "\n    CustomerID                    string          " + BT + "json:\"customerId\"" + BT + "\n    Amount                        string          " + BT + "json:\"amount\"" + BT + "\n    FeesPaid                      string          " + BT + "json:\"feesPaid\"" + BT + "\n    GrossAmount                   string          " + BT + "json:\"grossAmount\"" + BT + "\n    GasCharge                     string          " + BT + "json:\"gasCharge\"" + BT + "\n    Currency                      json.RawMessage " + BT + "json:\"currency\"" + BT + "\n    TransactionObject             json.RawMessage " + BT + "json:\"transactionObject\"" + BT + "\n    OriginalAmount                *string         " + BT + "json:\"originalAmount,omitempty\"" + BT + "\n    OriginalCurrency              json.RawMessage " + BT + "json:\"originalCurrency,omitempty\"" + BT + "\n    WebhookDeliveryIdempotencyKey string          " + BT + "json:\"webhookDeliveryIdempotencyKey\"" + BT + "\n    TxIdempotencyKey              string          " + BT + "json:\"txIdempotencyKey\"" + BT + "\n}\n\nfunc HandleWebhook(sharedToken string) http.HandlerFunc {\n    return func(w http.ResponseWriter, r *http.Request) {\n        if r.Method != http.MethodPost {\n            http.Error(w, \"method not allowed\", http.StatusMethodNotAllowed)\n            return\n        }\n        body, err := io.ReadAll(r.Body)\n        if err != nil {\n            http.Error(w, \"failed to read body\", http.StatusBadRequest)\n            return\n        }\n        defer r.Body.Close()\n        signature := r.Header.Get(\"X-Signature\")\n        if !verifySignature(body, signature, sharedToken) {\n            http.Error(w, \"invalid signature\", http.StatusUnauthorized)\n            return\n        }\n        var payload WebhookPayload\n        if err := json.Unmarshal(body, &payload); err != nil {\n            http.Error(w, \"invalid payload\", http.StatusBadRequest)\n            return\n        }\n        fmt.Printf(\"Deposit event: %s for customer %s\\n\", payload.Event, payload.CustomerID)\n        w.WriteHeader(http.StatusOK)\n    }\n}\n\nfunc verifySignature(body []byte, signature, sharedToken string) bool {\n    mac := hmac.New(sha256.New, []byte(sharedToken))\n    mac.Write(body)\n    expected := hex.EncodeToString(mac.Sum(nil))\n    return hmac.Equal([]byte(expected), []byte(signature))\n}";

var G7 = "package main\n\nimport (\n    \"fmt\"\n    \"log\"\n    \"net/http\"\n)\n// Import your commerce package\n\nfunc main() {\n    client := commerce.NewClient(\"your-public-api-key\", \"your-api-secret\")\n\n    customer, err := client.CreateCustomer(commerce.CreateCustomerRequest{\n        DepositID:           \"your-deposit-id\",\n        CustomerID:          \"unique-customer-id\",\n        RecipientPublicKeys: []string{\"your-recipient-wallet-address\"},\n    })\n    if err != nil {\n        log.Fatalf(\"Failed to create customer: %v\", err)\n    }\n\n    fmt.Printf(\"Customer token: %s\\n\", customer.Token)\n    fmt.Printf(\"Deposit wallets: %+v\\n\", customer.DepositWallets)\n\n    _ = client.RecordWalletActivity(customer.Token)\n\n    http.HandleFunc(\"/webhooks/deposits\", commerce.HandleWebhook(\"your-shared-token\"))\n    log.Println(\"Listening on :8080\")\n    log.Fatal(http.ListenAndServe(\":8080\", nil))\n}";

// ── NODE CODE ──
var _rq = "require";
var N1 = "const BASE_URL = \"https://api.hel.io/v1\";\n\nclass CommerceClient {\n  constructor(apiKey, apiSecret) {\n    this.apiKey = apiKey;\n    this.apiSecret = apiSecret;\n  }\n\n  async doRequest(method, path, body = null) {\n    const url = new URL(path, BASE_URL);\n    url.searchParams.set(\"apiKey\", this.apiKey);\n    const options = {\n      method,\n      headers: {\n        \"Authorization\": \"Bearer \" + this.apiSecret,\n        \"Content-Type\": \"application/json\",\n      },\n    };\n    if (body) options.body = JSON.stringify(body);\n    const response = await fetch(url.toString(), options);\n    if (!response.ok) {\n      const text = await response.text();\n      throw new Error(\"API error (\" + response.status + \"): \" + text);\n    }\n    const ct = response.headers.get(\"content-type\");\n    if (ct && ct.includes(\"application/json\")) return response.json();\n    return null;\n  }\n}";

var N2 = "async createCustomer(depositId, customerId, recipientPublicKeys, additionalJSON) {\n  const body = { depositId, customerId, recipientPublicKeys };\n  if (additionalJSON) body.additionalJSON = additionalJSON;\n  return this.doRequest(\"POST\", \"/v1/deposit-customers/api-key\", body);\n}";

var N3 = "async getCustomer(depositCustomerToken) {\n  return this.doRequest(\n    \"GET\",\n    \"/v1/deposit-customers/\" + depositCustomerToken + \"/api-key\"\n  );\n}";

var N4 = "async recordWalletActivity(customerToken) {\n  return this.doRequest(\n    \"POST\",\n    \"/v1/deposit-wallet/token/\" + customerToken + \"/activity\"\n  );\n}\n\nasync recordWalletActivityByKeys(publicKeys) {\n  return this.doRequest(\"POST\", \"/v1/deposit-wallet/activity\", {\n    wallets: publicKeys,\n  });\n}";

var N5 = "async getDepositCurrencies() {\n  return this.doRequest(\"GET\", \"/v1/currency/deposit\");\n}";

var N6 = "const crypto = " + _rq + "(\"crypto\");\n\nfunction verifySignature(body, signature, sharedToken) {\n  const expected = crypto\n    .createHmac(\"sha256\", sharedToken)\n    .update(body)\n    .digest(\"hex\");\n  return crypto.timingSafeEqual(\n    Buffer.from(expected),\n    Buffer.from(signature)\n  );\n}\n\nfunction webhookHandler(sharedToken) {\n  return (req, res) => {\n    const signature = req.headers[\"x-signature\"];\n    const rawBody = JSON.stringify(req.body);\n    if (!verifySignature(rawBody, signature, sharedToken)) {\n      return res.status(401).json({ error: \"Invalid signature\" });\n    }\n    const { event, customerId } = req.body;\n    console.log(\"Deposit event: \" + event + \" for customer \" + customerId);\n    res.sendStatus(200);\n  };\n}";

var N7 = "const express = " + _rq + "(\"express\");\n\nconst client = new CommerceClient(\"your-public-api-key\", \"your-api-secret\");\nconst app = express();\napp.use(express.json());\n\napp.post(\"/api/deposit-customer\", async (req, res) => {\n  try {\n    const customer = await client.createCustomer(\n      \"your-deposit-id\", req.body.customerId,\n      [\"your-recipient-wallet-address\"]\n    );\n    await client.recordWalletActivity(customer.token);\n    res.json({ token: customer.token, depositWallets: customer.depositWallets });\n  } catch (err) {\n    res.status(500).json({ error: err.message });\n  }\n});\n\napp.post(\"/webhooks/deposits\", webhookHandler(\"your-shared-token\"));\napp.listen(8080, () => console.log(\"Listening on :8080\"));";

// ── WIDGET CODE ──
var wFn = MP + "CommerceDeposit";
var wWin = "window." + wFn;
var embedSrc = "https://embed.deposits.hel.io/assets/index-v1.js";

var WM = {
  react: "// Use the @heliofi/deposit-react package\nimport { " + MPC + "CommerceDeposit } from '@heliofi/deposit-react';\nimport { useState } from 'react';\n\nfunction DepositModal({ customerToken }) {\n  const [open, setOpen] = useState(false);\n  return (\n    <>\n      <button onClick={() => setOpen(true)}>Deposit</button>\n      {open && (\n        <div className=\"modal-overlay\" onClick={() => setOpen(false)}>\n          <div className=\"modal-content\" onClick={e => e.stopPropagation()}>\n            <" + MPC + "CommerceDeposit config={{\n              depositCustomerToken: customerToken, network: 'main',\n              display: 'inline',\n              onSuccess: () => setOpen(false),\n              onError: (err) => console.error(err),\n            }} />\n          </div>\n        </div>\n      )}\n    </>\n  );\n}",
  svelte: "<script>\n  import { onMount } from 'svelte';\n  let showModal = false, container, widget = null;\n  const SCRIPT_URL = '" + embedSrc + "';\n  const TOKEN = 'your-deposit-customer-token';\n\n  onMount(() => {\n    const script = document.createElement('script');\n    script.type = 'module'; script.src = SCRIPT_URL;\n    document.head.appendChild(script);\n    return () => script.remove();\n  });\n\n  function open() {\n    showModal = true;\n    if (!widget) {\n      setTimeout(() => {\n        widget = " + wWin + "(container, {\n          depositCustomerToken: TOKEN, network: 'main', display: 'inline',\n          onSuccess: () => { showModal = false; },\n          onError: (e) => console.error(e),\n        });\n      }, 100);\n    }\n  }\n</script>\n<button on:click={open}>Deposit</button>",
  vanilla: "<script type=\"module\" src=\"" + embedSrc + "\" id=\"deposit-script\"></script>\n<button id=\"deposit-btn\">Deposit</button>\n<div id=\"modal-overlay\" style=\"display:none\">\n  <div id=\"modal-content\"><div id=\"deposit-container\"></div></div>\n</div>\n<script>\ndocument.getElementById('deposit-btn').addEventListener('click', () => {\n  document.getElementById('modal-overlay').style.display = 'flex';\n  " + wWin + "(document.getElementById('deposit-container'), {\n    depositCustomerToken: 'your-token-here', network: 'main', display: 'inline',\n    onSuccess: () => { document.getElementById('modal-overlay').style.display = 'none'; },\n    onError: (err) => console.error(err),\n  });\n});\n</script>",
};

var WST = {
  react: "import { " + MPC + "CommerceDeposit } from '@heliofi/deposit-react';\n\nfunction DepositWidget({ customerToken }) {\n  return (\n    <" + MPC + "CommerceDeposit config={{\n      depositCustomerToken: customerToken, network: 'main', display: 'inline',\n      onSuccess: (data) => console.log('Done:', data),\n      onError: (err) => console.error(err),\n    }} />\n  );\n}",
  svelte: "<script>\n  import { onMount } from 'svelte';\n  let container;\n  onMount(() => {\n    const script = document.createElement('script');\n    script.type = 'module';\n    script.src = '" + embedSrc + "';\n    script.onload = () => {\n      " + wWin + "(container, {\n        depositCustomerToken: 'your-token-here', network: 'main', display: 'inline',\n        onSuccess: () => console.log('Done!'), onError: (e) => console.error(e),\n      });\n    };\n    document.head.appendChild(script);\n    return () => script.remove();\n  });\n</script>\n<div bind:this={container} />",
  vanilla: "<script type=\"module\" src=\"" + embedSrc + "\" id=\"deposit-script\"></script>\n<div id=\"deposit-container\"></div>\n<script>\ndocument.getElementById('deposit-script').addEventListener('load', () => {\n  " + wWin + "(document.getElementById('deposit-container'), {\n    depositCustomerToken: 'your-token-here', network: 'main', display: 'inline',\n    onSuccess: () => console.log('Done!'), onError: (err) => console.error(err),\n  });\n});\n</script>",
};

var WIF = {
  react: "import { useEffect, useState } from 'react';\n\nfunction DepositIframe({ customerToken }) {\n  const [height, setHeight] = useState(260);\n  useEffect(() => {\n    const handler = (e) => {\n      if (e.origin !== '" + MPURL + "') return;\n      if (e.data.type === 'onHeightChanged') setHeight(e.data.height);\n      if (e.data.type === 'onSuccess') alert('Deposit completed!');\n      if (e.data.type === 'onError') alert('Error: ' + e.data.message);\n    };\n    window.addEventListener('message', handler);\n    return () => window.removeEventListener('message', handler);\n  }, []);\n  return (\n    <iframe allow=\"clipboard-write\" style={{ width: 420, minHeight: 260, height }}\n      src={'" + MPURL + "/embed/deposit/' + customerToken} />\n  );\n}",
  svelte: "<script>\n  import { onMount } from 'svelte';\n  export let customerToken;\n  let iframeHeight = 260;\n  onMount(() => {\n    const handler = (e) => {\n      if (e.origin !== '" + MPURL + "') return;\n      if (e.data.type === 'onHeightChanged') iframeHeight = e.data.height;\n      if (e.data.type === 'onSuccess') alert('Deposit completed!');\n      if (e.data.type === 'onError') alert('Error: ' + e.data.message);\n    };\n    window.addEventListener('message', handler);\n    return () => window.removeEventListener('message', handler);\n  });\n</script>\n<iframe allow=\"clipboard-write\"\n  style=\"width:420px; min-height:260px; height:{iframeHeight}px\"\n  src=\"" + MPURL + "/embed/deposit/{customerToken}\" />",
  vanilla: "<iframe id=\"deposit-iframe\" allow=\"clipboard-write\"\n  style=\"width:420px; min-height:260px;\"\n  src=\"" + MPURL + "/embed/deposit/your-token-here\"></iframe>\n<script>\nwindow.addEventListener('message', (e) => {\n  if (e.origin !== '" + MPURL + "') return;\n  var iframe = document.getElementById('deposit-iframe');\n  switch (e.data.type) {\n    case 'onHeightChanged': iframe.style.height = e.data.height + 'px'; break;\n    case 'onSuccess': alert('Deposit completed!'); break;\n    case 'onError': alert('Error: ' + e.data.message); break;\n  }\n});\n</script>",
};

var HFE = {
  react: "function DepositPage({ wallets, onDeposit }) {\n  return (\n    <div className=\"deposit-container\">\n      <h2>Choose a network</h2>\n      {wallets.map(w => (\n        <div key={w.id} className=\"wallet-card\" onClick={() => onDeposit(w)}>\n          <span>{w.blockchainEngine.type}</span>\n          <code>{w.publicKey}</code>\n        </div>\n      ))}\n    </div>\n  );\n}",
  svelte: "<script>\n  let wallets = [], loading = true;\n  async function loadWallets() {\n    const res = await fetch('/api/deposit-customer', {\n      method: 'POST', headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ customerId: 'user-123' }),\n    });\n    const data = await res.json();\n    wallets = data.depositWallets; loading = false;\n  }\n  loadWallets();\n</script>\n{#if loading}<p>Loading...</p>{:else}\n{#each wallets as wallet}\n  <div class=\"wallet-card\">\n    <span>{wallet.blockchainEngine.type}</span>\n    <code>{wallet.publicKey}</code>\n  </div>\n{/each}{/if}",
  vanilla: "async function initDeposit(customerId) {\n  const res = await fetch('/api/deposit-customer', {\n    method: 'POST', headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ customerId }),\n  });\n  const { depositWallets, token } = await res.json();\n  var container = document.getElementById('deposit-wallets');\n  depositWallets.forEach(function(w) {\n    var el = document.createElement('div');\n    el.className = 'wallet-card';\n    el.innerHTML = '<span>' + w.blockchainEngine.type + '</span><code>' + w.publicKey + '</code>';\n    container.appendChild(el);\n  });\n  await fetch('/api/record-activity/' + token, { method: 'POST' });\n}\ninitDeposit('user-123');",
};

// ── UI COMPONENTS ──

function CodeBlock({ code, lang, title }) {
  const [cp, setCp] = useState(false);
  var copy = function() { navigator.clipboard.writeText(code); setCp(true); setTimeout(function() { setCp(false); }, 2000); };
  return (
    <div style={{ background: DARK, borderRadius: 12, overflow: "hidden", border: "1px solid " + PBR, marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", background: PBG, borderBottom: "1px solid rgba(124,58,237,0.15)" }}>
        <span style={{ fontSize: 12, color: PL, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{title || lang}</span>
        <button onClick={copy} style={{ background: cp ? "rgba(52,211,153,0.2)" : "rgba(124,58,237,0.15)", border: "1px solid " + (cp ? "rgba(52,211,153,0.3)" : PBR2), color: cp ? "#34d399" : PL, padding: "4px 12px", borderRadius: 6, cursor: "pointer", fontSize: 12, fontWeight: 500 }}>
          {cp ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <pre style={{ margin: 0, padding: 20, overflowX: "auto", fontSize: 13, lineHeight: 1.6, color: "#e6edf3", fontFamily: "'SF Mono','Fira Code',monospace" }}><code>{code}</code></pre>
    </div>
  );
}

function Btn({ children, onClick, variant, style: s }) {
  var base = { border: "none", borderRadius: 10, cursor: "pointer", fontWeight: 600, fontSize: 14, transition: "all 0.2s", ...(s||{}) };
  if (variant === "primary") return <button onClick={onClick} style={{ ...base, background: "linear-gradient(135deg," + P + "," + P2 + ")", color: "#fff", padding: "12px 28px", boxShadow: "0 4px 20px rgba(124,58,237,0.3)" }}>{children}</button>;
  if (variant === "ghost") return <button onClick={onClick} style={{ ...base, background: "none", color: PL, padding: "6px 0", fontSize: 13 }}>{children}</button>;
  return <button onClick={onClick} style={{ ...base, background: PBG2, border: "1px solid " + PBR2, color: PL, padding: "8px 18px" }}>{children}</button>;
}

function Card({ children, onClick, hoverable, style: s }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={function(){setH(true)}} onMouseLeave={function(){setH(false)}}
      style={{ background: h && hoverable ? PBG2 : PBG, border: "1px solid " + (h && hoverable ? P : PBR), borderRadius: 14, padding: "24px 20px", cursor: hoverable ? "pointer" : "default", transition: "all 0.2s", ...(s||{}) }}>
      {children}
    </div>
  );
}

function Sec({ title, children, style: s }) {
  return (
    <div style={{ background: "rgba(124,58,237,0.04)", border: "1px solid rgba(124,58,237,0.15)", borderRadius: 14, padding: 24, marginBottom: 24, ...(s||{}) }}>
      {title && <h3 style={{ fontSize: 16, fontWeight: 600, color: PL, marginTop: 0, marginBottom: 16 }}>{title}</h3>}
      {children}
    </div>
  );
}

function GS({ title, desc, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: PLL, marginBottom: 4 }}>{title}</h3>
      {desc && <p style={{ fontSize: 14, color: GRAY, marginBottom: 16, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: desc }} />}
      {children}
    </div>
  );
}

// ── MAIN APP ──

function App() {
  var params = new URLSearchParams(window.location.search);
  var isPartnerView = params.has("p");

  const [step, setStep] = useState(isPartnerView ? 3 : 0);
  const [partner, setPartner] = useState(params.get("p") || "");
  const [notes, setNotes] = useState(params.get("n") || "");
  const [sty, setSty] = useState(params.get("s") || null);
  const [lang, setLang] = useState(params.get("l") || null);
  const [secL, setSecL] = useState(null);
  const [wd, setWd] = useState(params.get("w") === "1");
  const [fade, setFade] = useState(true);
  const [cpd, setCpd] = useState(false);
  const [cpl, setCpl] = useState(false);

  var go = function(fn) { setFade(false); setTimeout(function() { fn(); setFade(true); }, 200); };
  var nx = function(s) { go(function() { setStep(s); }); };
  var reset = function() { go(function() { setStep(0); setPartner(""); setNotes(""); setSty(null); setLang(null); setSecL(null); setWd(false); }); };

  var sl = STYLES.find(function(s) { return s.id === sty; });
  var ll = LANGS.find(function(l) { return l.id === lang; });
  var isHL = sty === "headless";
  var isGo = lang === "go";
  var isNode = lang === "node";

  var copyMD = function() { navigator.clipboard.writeText("# Guide for " + partner); setCpd(true); setTimeout(function() { setCpd(false); }, 2000); };

  var copyPartnerLink = function() {
    var p = new URLSearchParams();
    p.set("p", partner);
    if (sty) p.set("s", sty);
    if (lang) p.set("l", lang);
    if (wd) p.set("w", "1");
    var url = window.location.origin + window.location.pathname + "?" + p.toString();
    navigator.clipboard.writeText(url);
    setCpl(true);
    setTimeout(function() { setCpl(false); }, 2000);
  };

  var [cpa, setCpa] = useState(false);
  var copyAgentLink = function() {
    var p = new URLSearchParams();
    p.set("p", partner);
    if (sty) p.set("s", sty);
    if (lang) p.set("l", lang);
    if (wd) p.set("w", "1");
    var base = window.location.origin + window.location.pathname;
    if (base.endsWith("/")) base = base.slice(0, -1);
    var pathParts = base.split("/");
    pathParts.pop();
    var url = pathParts.join("/") + "/agent.html?" + p.toString();
    navigator.clipboard.writeText(url);
    setCpa(true);
    setTimeout(function() { setCpa(false); }, 2000);
  };

  var wSamples = function() {
    if (sty === "modal") return WM;
    if (sty === "standalone") return WST;
    if (sty === "iframe") return WIF;
    return null;
  };

  var infoNote = "rgba(59,130,246,0.06)";
  var infoBorder = "1px solid rgba(59,130,246,0.2)";
  var authDesc = "The API requires <strong>two</strong> credentials on every authenticated endpoint: <strong>API Secret</strong> → sent as " + Cd("Authorization: Bearer &lt;API_SECRET&gt;") + " header, and <strong>API Key</strong> → sent as " + Cd("apiKey") + " query parameter. Both are generated in the Dashboard under <strong>Developer</strong>.";
  var whDesc = "Implement a webhook handler to confirm deposit transactions on your backend. Webhooks can be created in the Dashboard under <strong>Developer</strong>, or via the " + Anc(LNK.wh, "Create a Deposit Webhook endpoint") + ". Event types: " + Cd("DEPOSIT_TX_CONFIRMED") + ", " + Cd("DEPOSIT_TX_SUBMITTED") + ", " + Cd("DEPOSIT_TX_ENRICHED") + ", " + Cd("ALL");

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg," + BG + " 0%," + BG2 + " 50%," + BG + " 100%)", color: "#f0eef6", fontFamily: "'Inter',-apple-system,sans-serif" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "40px 24px" }}>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg," + P + "," + P2 + ")", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, color: "#fff", boxShadow: "0 4px 20px rgba(124,58,237,0.4)" }}>M</div>
            <span style={{ fontSize: 14, fontWeight: 600, color: PL, letterSpacing: 1.5, textTransform: "uppercase" }}>{MPC} Commerce</span>
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 8px", background: "linear-gradient(135deg," + PLL + ",#ffffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{isPartnerView ? "Integration Guide" : "Partner Integration Guide"}</h1>
          {!isPartnerView && <p style={{ fontSize: 15, color: GRAY, margin: 0 }}>Configure and generate a tailored integration guide for your partner</p>}
        </div>

        {!isPartnerView && <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 40, flexWrap: "wrap" }}>
          {["Partner Info", "Integration Style", "Language", "Generated Guide"].map(function(label, i) { return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, background: i <= step ? "linear-gradient(135deg," + P + "," + P2 + ")" : "rgba(124,58,237,0.1)", color: i <= step ? "#fff" : GRAY2, border: i <= step ? "none" : "1px solid " + PBR, transition: "all 0.3s" }}>{i + 1}</div>
              <span style={{ fontSize: 12, color: i <= step ? PL : GRAY2, fontWeight: i === step ? 600 : 400 }}>{label}</span>
              {i < 3 && <div style={{ width: 24, height: 1, background: i < step ? P : PBR }} />}
            </div>
          ); })}
        </div>}

        <div style={{ opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(8px)", transition: "all 0.2s ease" }}>

          {step === 0 && (
            <div style={{ maxWidth: 520, margin: "0 auto" }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24, color: PLL }}>Partner Details</h2>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: PL, display: "block", marginBottom: 8 }}>Partner Name *</label>
                <input value={partner} onChange={function(e){setPartner(e.target.value)}} placeholder="e.g. Moonshot" style={{ width: "100%", padding: "14px 16px", background: PBG, border: "1px solid " + PBR, borderRadius: 10, color: "#f0eef6", fontSize: 15, outline: "none", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: PL, display: "block", marginBottom: 8 }}>Internal Notes <span style={{ fontWeight: 400, color: GRAY }}>(optional)</span></label>
                <textarea value={notes} onChange={function(e){setNotes(e.target.value)}} placeholder="e.g. Partner wants fully headless because they own the mobile UX..." rows={3} style={{ width: "100%", padding: "14px 16px", background: PBG, border: "1px solid " + PBR, borderRadius: 10, color: "#f0eef6", fontSize: 14, outline: "none", boxSizing: "border-box", resize: "vertical", fontFamily: "inherit", lineHeight: 1.6 }} />
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                  <div onClick={function(){setWd(!wd)}} style={{ width: 44, height: 24, borderRadius: 12, background: wd ? P : "rgba(124,58,237,0.15)", position: "relative", transition: "all 0.2s", cursor: "pointer" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#fff", position: "absolute", top: 3, left: wd ? 23 : 3, transition: "all 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }} />
                  </div>
                  <span style={{ fontSize: 14, color: PLL }}>Include Withdrawals section</span>
                </label>
              </div>
              <Btn variant="primary" onClick={function(){partner.trim() && nx(1)}} style={{ opacity: partner.trim() ? 1 : 0.4, pointerEvents: partner.trim() ? "auto" : "none" }}>Continue</Btn>
            </div>
          )}

          {step === 1 && (
            <div>
              <Btn variant="ghost" onClick={function(){nx(0)}}>← Back</Btn>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, marginTop: 12, color: PLL }}>How should {partner} integrate deposits?</h2>
              <p style={{ fontSize: 14, color: GRAY, marginBottom: 24 }}>Choose the integration style that best fits their needs</p>
              <div style={{ background: infoNote, border: infoBorder, borderRadius: 12, padding: "16px 20px", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                <div><p style={{ margin: 0, fontSize: 14, color: "#93c5fd", lineHeight: 1.6 }}><strong>Want to see the deposit widget in action?</strong> Try the live demo before choosing.</p></div>
                <div style={{ display: "flex", gap: 8 }}>
                  <a href={LNK.demo} target="_blank" rel="noopener" style={{ background: "linear-gradient(135deg," + P + "," + P2 + ")", color: "#fff", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>Try Live Demo →</a>
                  <a href={LNK.denv} target="_blank" rel="noopener" style={{ background: PBG2, border: "1px solid " + PBR2, color: PL, padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>Test Configs</a>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {STYLES.map(function(s) { return (
                  <Card key={s.id} hoverable onClick={function(){setSty(s.id); nx(2);}}>
                    <div style={{ fontSize: 30, marginBottom: 10 }}>{s.icon}</div>
                    <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontSize: 13, color: GRAY }}>{s.desc}</div>
                  </Card>
                ); })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <Btn variant="ghost" onClick={function(){nx(1)}}>← Back</Btn>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, marginTop: 12, color: PLL }}>
                {isHL ? "What's " + partner + "'s backend language?" : "What's " + partner + "'s frontend framework?"}
              </h2>
              <p style={{ fontSize: 14, color: GRAY, marginBottom: 24 }}>
                Integration: <span style={{ color: PL, fontWeight: 600 }}>{sl && sl.label}</span>
                {isHL && <span> — backend languages only</span>}
                {!isHL && <span> — frontend frameworks only</span>}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: isHL ? "1fr 1fr" : "1fr 1fr 1fr", gap: 12, maxWidth: isHL ? 400 : "100%" }}>
                {(isHL ? BK_LANGS : FE_LANGS).map(function(l) { return (
                  <Card key={l.id} hoverable onClick={function(){setSecL(null); setLang(l.id); nx(3);}} style={{ textAlign: "center", padding: "28px 16px" }}>
                    <div style={{ marginBottom: 8, display: "flex", justifyContent: "center" }}><LI icon={l.icon} size={34} /></div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>{l.label}</div>
                  </Card>
                ); })}
              </div>
              {isHL && <p style={{ fontSize: 13, color: GRAY2, marginTop: 16, lineHeight: 1.6 }}>More backend languages (Python, etc.) coming soon. The headless integration is fully REST-based.</p>}
            </div>
          )}

          {step === 3 && (
            <div>
              {!isPartnerView && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                  <Btn variant="ghost" onClick={function(){nx(2)}}>← Back</Btn>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <Btn onClick={copyPartnerLink}>{cpl ? "✓ Link Copied!" : "📋 Copy Partner Link"}</Btn>
                    <Btn onClick={copyAgentLink}>{cpa ? "✓ Copied!" : "🤖 Copy Agent Link"}</Btn>
                    <Btn onClick={reset}>Start Over</Btn>
                  </div>
                </div>
              )}

              <div style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.12),rgba(168,85,247,0.08))", border: "1px solid " + PBR, borderRadius: 16, padding: "28px 28px 24px", marginBottom: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontSize: 12, color: GRAY, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Integration Guide for</div>
                    <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 16px", background: "linear-gradient(135deg," + PLL + ",#fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{partner}</h2>
                  </div>
                  <div style={{ fontSize: 12, color: GRAY }}>{new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</div>
                </div>
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                  <div><div style={{ fontSize: 11, color: GRAY, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Integration</div><div style={{ fontSize: 15, fontWeight: 600, color: PLL }}>{sl && sl.icon} {sl && sl.label}</div></div>
                  <div><div style={{ fontSize: 11, color: GRAY, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Language</div><div style={{ fontSize: 15, fontWeight: 600, color: PLL, display: "flex", alignItems: "center", gap: 6 }}>{ll && <LI icon={ll.icon} size={20} />} {ll && ll.label}</div></div>
                  {wd && <div><div style={{ fontSize: 11, color: GRAY, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Withdrawals</div><div style={{ fontSize: 15, fontWeight: 600, color: "#34d399" }}>✓ Included</div></div>}
                </div>
              </div>

              {notes && !isPartnerView && (
                <div style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.2)", borderRadius: 12, padding: "16px 20px", marginBottom: 24 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#fbbf24", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Partner Notes</div>
                  <p style={{ margin: 0, fontSize: 14, color: "#fde68a", lineHeight: 1.6 }}>{notes}</p>
                </div>
              )}

              <h2 style={{ fontSize: 24, fontWeight: 700, color: PLL, marginBottom: 4 }}>Deposits Integration Steps</h2>
              <p style={{ fontSize: 14, color: GRAY, marginBottom: 20 }}>You can begin by reviewing the documentation <a href={LNK.docs} target="_blank" rel="noopener" style={{ color: PL }}>here</a>. The product is fully self-serve. <strong style={{ color: GRAYLT }}>Note: KYB is not required</strong> to start the integration process.</p>

              <Sec title="Integration Steps">
                {STEPS.map(function(html, i) { return (
                  <div key={i}>
                    <div style={{ display: "flex", gap: 12, marginBottom: SUB[i] ? 6 : 14, alignItems: "flex-start" }}>
                      <div style={{ minWidth: 26, height: 26, borderRadius: "50%", background: "rgba(124,58,237,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: PL, flexShrink: 0 }}>{i + 1}</div>
                      <p style={{ margin: 0, fontSize: 14, color: GRAYLT, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                    {SUB[i] && <div style={{ marginLeft: 38, marginBottom: 14 }}>{SUB[i].map(function(s, j) { return (
                      <div key={j} style={{ display: "flex", gap: 10, marginBottom: 6, alignItems: "flex-start" }}>
                        <div style={{ minWidth: 6, height: 6, borderRadius: "50%", background: PL, marginTop: 8, flexShrink: 0 }} />
                        <p style={{ margin: 0, fontSize: 13, color: GRAY, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: s }} />
                      </div>
                    ); })}</div>}
                  </div>
                ); })}
              </Sec>

              <Sec title="Live Demo & Testing" style={{ marginTop: 24 }}>
                <p style={{ margin: "0 0 14px", fontSize: 14, color: GRAYLT, lineHeight: 1.6 }}>Use these environments to preview the deposit widget and test configurations before building your integration.</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href={LNK.demo} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,rgba(124,58,237,0.12),rgba(168,85,247,0.08))", border: "1px solid " + PBR, padding: "14px 20px", borderRadius: 10, textDecoration: "none", flex: "1 1 200px" }}>
                    <div style={{ fontSize: 24 }}>🚀</div>
                    <div><div style={{ fontSize: 14, fontWeight: 600, color: PLL, marginBottom: 2 }}>Live Deposit Demo</div><div style={{ fontSize: 12, color: GRAY }}>See the widget in action</div></div>
                  </a>
                  <a href={LNK.denv} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,rgba(124,58,237,0.12),rgba(168,85,247,0.08))", border: "1px solid " + PBR, padding: "14px 20px", borderRadius: 10, textDecoration: "none", flex: "1 1 200px" }}>
                    <div style={{ fontSize: 24 }}>🧪</div>
                    <div><div style={{ fontSize: 14, fontWeight: 600, color: PLL, marginBottom: 2 }}>Demo Environment</div><div style={{ fontSize: 12, color: GRAY }}>Toggle display modes, paste your token</div></div>
                  </a>
                </div>
              </Sec>

              <div style={{ height: 1, background: PBR, margin: "32px 0" }} />

              {isHL && isGo && (<>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: PLL, marginBottom: 20 }}>Example (Headless Go Backend)</h2>
                <p style={{ fontSize: 14, color: GRAY, marginBottom: 24, lineHeight: 1.6 }}>The following Go examples demonstrate how to integrate {MPC} Commerce Deposits from a Go backend service.</p>
                <GS title="Setup & Configuration" desc={authDesc}><CodeBlock code={G1} lang="Go" title="Go — Client Setup" /></GS>
                <GS title="Create a Deposit Customer" desc={"Generate a deposit customer and their wallets. See " + Anc(LNK.cc, "API reference") + "."}><CodeBlock code={G2} lang="Go" title="Go — Create Customer" /></GS>
                <GS title="Get a Deposit Customer" desc={"Retrieve a customer by token. See " + Anc(LNK.gc, "API reference") + "."}><CodeBlock code={G3} lang="Go" title="Go — Get Customer" /></GS>
                <GS title="Record Wallet Activity" desc={"Call this whenever you display a deposit wallet. See " + Anc(LNK.ra, "API reference") + "."}><CodeBlock code={G4} lang="Go" title="Go — Record Activity" /></GS>
                <GS title="Get Supported Currencies" desc={"Retrieve all supported currencies. See " + Anc(LNK.cur, "API reference") + "."}><CodeBlock code={G5} lang="Go" title="Go — Get Currencies" /></GS>
                <GS title="Webhook Handler" desc={whDesc}>
                  <div style={{ background: infoNote, border: infoBorder, borderRadius: 10, padding: "12px 16px", marginBottom: 14, fontSize: 13, color: "#93c5fd", lineHeight: 1.6 }}>Webhooks include headers: <strong>X-Signature</strong> (HMAC-SHA256), <strong>X-Webhook-Delivery-Id</strong>, <strong>X-Transaction-Id</strong>, and <strong>Authorization</strong>.</div>
                  <CodeBlock code={G6} lang="Go" title="Go — Webhook Handler" />
                </GS>
                <GS title="Putting It All Together" desc="A minimal example showing the full headless deposit flow."><CodeBlock code={G7} lang="Go" title="Go — Full Example" /></GS>
              </>)}

              {isHL && isNode && (<>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: PLL, marginBottom: 20 }}>Example (Headless Node.js Backend)</h2>
                <p style={{ fontSize: 14, color: GRAY, marginBottom: 24, lineHeight: 1.6 }}>The following Node.js examples demonstrate how to integrate {MPC} Commerce Deposits from a Node.js backend service.</p>
                <GS title="Setup & Configuration" desc={authDesc}><CodeBlock code={N1} lang="JavaScript" title="Node.js — Client Setup" /></GS>
                <GS title="Create a Deposit Customer" desc={"Add this method to the CommerceClient class. See " + Anc(LNK.cc, "API reference") + "."}><CodeBlock code={N2} lang="JavaScript" title="Node.js — Create Customer" /></GS>
                <GS title="Get a Deposit Customer" desc={"Add this method to the CommerceClient class. See " + Anc(LNK.gc, "API reference") + "."}><CodeBlock code={N3} lang="JavaScript" title="Node.js — Get Customer" /></GS>
                <GS title="Record Wallet Activity" desc={"Add these methods to the CommerceClient class. See " + Anc(LNK.ra, "API reference") + "."}><CodeBlock code={N4} lang="JavaScript" title="Node.js — Record Activity" /></GS>
                <GS title="Get Supported Currencies" desc={"Add this method to the CommerceClient class. See " + Anc(LNK.cur, "API reference") + "."}><CodeBlock code={N5} lang="JavaScript" title="Node.js — Get Currencies" /></GS>
                <GS title="Webhook Handler" desc={whDesc}>
                  <div style={{ background: infoNote, border: infoBorder, borderRadius: 10, padding: "12px 16px", marginBottom: 14, fontSize: 13, color: "#93c5fd", lineHeight: 1.6 }}>Uses the built-in <code>crypto</code> module and <code>express</code> for the HTTP server.</div>
                  <CodeBlock code={N6} lang="JavaScript" title="Node.js — Webhook Handler" />
                </GS>
                <GS title="Putting It All Together" desc="A minimal Express server showing the full headless deposit flow."><CodeBlock code={N7} lang="JavaScript" title="Node.js — Full Example" /></GS>
              </>)}

              {isHL && !isGo && !isNode && (<>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: PLL, marginBottom: 8 }}>Headless Frontend ({ll && ll.label})</h2>
                <p style={{ fontSize: 14, color: GRAY, marginBottom: 20, lineHeight: 1.6 }}>Fetch deposit wallets from your backend and render them in your own UI.</p>
                <CodeBlock code={HFE[lang]} lang={ll && ll.label} />
              </>)}

              {!isHL && (<>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: PLL, marginBottom: 8 }}>Example ({sl && sl.label})</h2>
                <p style={{ fontSize: 14, color: GRAY, marginBottom: 20, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: sty === "iframe" ? "Embed the deposit flow via a simple iframe with postMessage event support." : "Embed the " + MPC + " Commerce deposit widget using " + (lang === "react" ? "the " + Anc(LNK.npm, "@heliofi/deposit-react npm package") : "the vanilla JS embed script") + "." }} />
                <CodeBlock code={(wSamples() || {})[lang] || "// Coming soon"} lang={ll && ll.label} />
              </>)}

              <Sec title="API Reference" style={{ marginTop: 24 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {[["Create Deposit", LNK.cd], ["Create Customer", LNK.cc], ["Update Customer", LNK.uc], ["Get Customer", LNK.gc], ["Record Activity", LNK.ra], ["Get Currencies", LNK.cur], ["All Transactions", LNK.atx], ["Customer Transactions", LNK.ctx], ["Create Webhook", LNK.wh], ["Full Docs", LNK.docs]].map(function(item) { return (
                    <a key={item[0]} href={item[1]} target="_blank" rel="noopener" style={{ fontSize: 13, color: PL, textDecoration: "none", padding: "8px 12px", borderRadius: 8, background: PBG, display: "block" }}>→ {item[0]}</a>
                  ); })}
                </div>
              </Sec>

              {wd && (<>
                <div style={{ height: 1, background: PBR, margin: "36px 0" }} />
                <h2 style={{ fontSize: 24, fontWeight: 700, color: PLL, marginBottom: 4 }}>Withdrawals Integration Steps</h2>
                <p style={{ fontSize: 14, color: GRAY, marginBottom: 20, lineHeight: 1.6 }}>Withdrawals are API-based and fully frontend-agnostic. They work with any language or framework that can make HTTP requests.</p>
                <Sec title="Overview">
                  <p style={{ margin: 0, fontSize: 14, color: GRAYLT, lineHeight: 1.8 }}>At a high level:</p>
                  {WS.map(function(s, i) { return (
                    <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, marginTop: 10, alignItems: "flex-start" }}>
                      <div style={{ minWidth: 26, height: 26, borderRadius: "50%", background: "rgba(124,58,237,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: PL, flexShrink: 0 }}>{s.n}</div>
                      <p style={{ margin: 0, fontSize: 14, color: GRAYLT, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: s.t }} />
                    </div>
                  ); })}
                  <p style={{ margin: "14px 0 0", fontSize: 14, color: GRAY }}>Because this is API-based, you retain full control of the frontend experience.</p>
                </Sec>
                <Sec title="Create a Withdrawal (Swap)">
                  <p style={{ margin: 0, fontSize: 14, color: GRAYLT, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: WSW }} />
                </Sec>
                <Sec title="Interface Recommendations (Best Practices)">
                  {WBP.map(function(html, i) { return (
                    <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
                      <div style={{ minWidth: 26, height: 26, borderRadius: "50%", background: "rgba(124,58,237,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: PL, flexShrink: 0 }}>{i + 1}</div>
                      <p style={{ margin: 0, fontSize: 14, color: GRAYLT, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                  ); })}
                </Sec>
                <div style={{ background: infoNote, border: infoBorder, borderRadius: 12, padding: "14px 20px" }}>
                  <p style={{ margin: 0, fontSize: 14, color: "#93c5fd", lineHeight: 1.6 }}>An engineer from our swaps team will be hands-on with you for any help or questions. If you would like to collaborate on mockups of the frontend implementation of withdrawals, let us know, and we can get a mockup to you from our design team.</p>
                </div>
              </>)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
