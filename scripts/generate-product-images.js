const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images', 'products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Domestic RO Purifier (wall-mounted, blue transparent tank, display)
const domesticRoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
    <linearGradient id="tankGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0284C7" stop-opacity="0.98"/>
    </linearGradient>
    <linearGradient id="chrome" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="50%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#94A3B8"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0A2540" flood-opacity="0.2"/>
    </filter>
  </defs>

  <rect width="500" height="500" rx="20" fill="#F8FAFC"/>
  <!-- Subtle circular backdrop -->
  <circle cx="250" cy="250" r="190" fill="#E0F2FE" opacity="0.6"/>

  <g filter="url(#shadow)" transform="translate(130, 45)">
    <!-- Outer Cabinet -->
    <rect x="0" y="0" width="240" height="390" rx="24" fill="url(#bodyGrad)" stroke="#CBD5E1" stroke-width="2"/>

    <!-- Top Filtration Chamber Panel (White/Silver) -->
    <path d="M 0,24 Q 0,0 24,0 L 216,0 Q 240,0 240,24 L 240,140 L 0,140 Z" fill="#FFFFFF"/>
    
    <!-- Brand Name & Status LED Panel -->
    <rect x="35" y="25" width="170" height="50" rx="10" fill="#0A2540"/>
    <circle cx="55" cy="50" r="5" fill="#22C55E"/>
    <circle cx="70" cy="50" r="5" fill="#38BDF8"/>
    <text x="120" y="44" font-family="'Inter', sans-serif" font-weight="800" font-size="14" fill="#FFFFFF" text-anchor="middle">GRAVITY</text>
    <text x="120" y="58" font-family="'Inter', sans-serif" font-weight="700" font-size="8" fill="#38BDF8" text-anchor="middle" letter-spacing="2">RO + UV + UF + TDS</text>

    <!-- Filter status indicators -->
    <rect x="35" y="88" width="170" height="24" rx="6" fill="#F1F5F9" stroke="#E2E8F0"/>
    <text x="120" y="103" font-family="sans-serif" font-size="9" fill="#0369A1" font-weight="600" text-anchor="middle">100% PURIFIED • AUTO FLUSH</text>

    <!-- Lower Transparent Pure Water Storage Tank (Blue Reservoir) -->
    <rect x="12" y="145" width="216" height="200" rx="14" fill="url(#tankGrad)"/>
    
    <!-- Internal water level wave -->
    <path d="M 12,220 Q 60,210 120,225 T 228,215 L 228,340 Q 228,345 220,345 L 20,345 Q 12,345 12,340 Z" fill="#0369A1" opacity="0.6"/>
    
    <!-- Vertical Water Gauge Markings -->
    <line x1="30" y1="170" x2="45" y2="170" stroke="#FFFFFF" stroke-width="2" opacity="0.8"/>
    <text x="52" y="173" font-family="sans-serif" font-size="9" fill="#FFFFFF" opacity="0.9">10 L</text>
    <line x1="30" y1="210" x2="42" y2="210" stroke="#FFFFFF" stroke-width="1.5" opacity="0.8"/>
    <line x1="30" y1="250" x2="45" y2="250" stroke="#FFFFFF" stroke-width="2" opacity="0.8"/>
    <text x="52" y="253" font-family="sans-serif" font-size="9" fill="#FFFFFF" opacity="0.9">5 L</text>
    <line x1="30" y1="290" x2="42" y2="290" stroke="#FFFFFF" stroke-width="1.5" opacity="0.8"/>

    <!-- Dispenser Tap (Chrome) -->
    <g transform="translate(105, 335)">
      <path d="M 10,0 L 20,0 L 20,25 Q 20,32 15,35 Q 10,32 10,25 Z" fill="url(#chrome)" stroke="#64748B"/>
      <!-- Tap Lever -->
      <rect x="0" y="10" width="30" height="8" rx="4" fill="#0284C7"/>
    </g>

    <!-- Drip Base -->
    <rect x="15" y="375" width="210" height="8" rx="3" fill="#CBD5E1"/>
  </g>
</svg>`;

// 2. Under-sink RO
const undersinkRoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <rect width="500" height="500" rx="20" fill="#F8FAFC"/>
  <circle cx="250" cy="250" r="190" fill="#F1F5F9"/>

  <g transform="translate(70, 70)">
    <!-- Pressurized Hydrostatic Storage Tank (White tank) -->
    <ellipse cx="100" cy="240" rx="75" ry="90" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
    <ellipse cx="100" cy="210" rx="75" ry="30" fill="#F1F5F9"/>
    <rect x="92" y="140" width="16" height="20" fill="#0284C7"/>
    <text x="100" y="250" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">GRAVITY RO</text>
    <text x="100" y="268" font-family="sans-serif" font-size="10" fill="#64748B" text-anchor="middle">PRESSURIZED TANK</text>

    <!-- 5-Stage Under-sink Manifold Rack -->
    <g transform="translate(195, 100)">
      <!-- Top bracket -->
      <rect x="0" y="0" width="165" height="24" rx="4" fill="#1E293B"/>
      <!-- 3 Vertical Sump Canisters -->
      <rect x="10" y="24" width="40" height="150" rx="6" fill="#0284C7"/>
      <rect x="62" y="24" width="40" height="150" rx="6" fill="#0369A1"/>
      <rect x="114" y="24" width="40" height="150" rx="6" fill="#075985"/>
      <!-- Horizontal RO Membrane Housing on top -->
      <rect x="5" y="-35" width="155" height="28" rx="14" fill="#FFFFFF" stroke="#0284C7" stroke-width="2"/>
      <text x="82" y="-17" font-family="sans-serif" font-size="8" font-weight="bold" fill="#0369A1" text-anchor="middle">RO MEMBRANE VESSEL</text>
    </g>

    <!-- Designer Chrome Gooseneck Faucet -->
    <g transform="translate(30, 20)">
      <path d="M 0,110 L 0,40 Q 0,0 35,0 Q 60,0 60,25 L 60,45" fill="none" stroke="#94A3B8" stroke-width="8" stroke-linecap="round"/>
      <polygon points="56,45 64,45 60,55" fill="#38BDF8"/>
      <!-- Countertop base -->
      <rect x="-15" y="110" width="30" height="12" rx="3" fill="#475569"/>
    </g>
  </g>
</svg>`;

// 3. Copper Alkaline RO
const copperAlkalineRoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="copperGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="50%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
    <linearGradient id="blackCabinet" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="500" height="500" rx="20" fill="#F8FAFC"/>
  <circle cx="250" cy="250" r="190" fill="#FEF3C7" opacity="0.5"/>

  <g transform="translate(130, 50)">
    <!-- Sleek Matte Black & Copper Cabinet -->
    <rect x="0" y="0" width="240" height="380" rx="20" fill="url(#blackCabinet)" stroke="#B45309" stroke-width="3"/>
    
    <!-- Copper Trim Accent Ring -->
    <rect x="15" y="15" width="210" height="70" rx="12" fill="#030712" stroke="url(#copperGrad)" stroke-width="2"/>
    <text x="120" y="42" font-family="'Inter', sans-serif" font-weight="900" font-size="15" fill="url(#copperGrad)" text-anchor="middle">GRAVITY ALKALINE</text>
    <text x="120" y="62" font-family="'Inter', sans-serif" font-weight="700" font-size="9" fill="#FDE68A" text-anchor="middle" letter-spacing="2">ACTIVE COPPER + ZINC • pH 8.5</text>

    <!-- Mineral Tank Window with Amber/Copper Glow -->
    <rect x="25" y="105" width="190" height="200" rx="14" fill="#1E293B" stroke="#475569"/>
    <circle cx="120" cy="180" r="45" fill="url(#copperGrad)" opacity="0.3"/>
    <text x="120" y="175" font-family="sans-serif" font-size="28" font-weight="bold" fill="#F59E0B" text-anchor="middle">Cu⁺⁺</text>
    <text x="120" y="198" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FDE68A" text-anchor="middle">COPPER ENRICHED</text>
    <text x="120" y="240" font-family="sans-serif" font-size="10" fill="#94A3B8" text-anchor="middle">Immunity &amp; Digestion Support</text>

    <!-- Dispenser -->
    <circle cx="120" cy="335" r="16" fill="url(#copperGrad)"/>
    <rect x="117" y="335" width="6" height="15" rx="3" fill="#FFFFFF"/>
  </g>
</svg>`;

// 4. Whole House Filtration Plant (FRP Vessels TATA & Pentair)
const wholeHouseFiltrationSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="frpVesselBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0369A1"/>
      <stop offset="35%" stop-color="#0284C7"/>
      <stop offset="70%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0C4A6E"/>
    </linearGradient>
  </defs>
  <rect width="500" height="500" rx="20" fill="#F1F8FC"/>
  <circle cx="250" cy="250" r="190" fill="#E0F2FE" opacity="0.7"/>

  <!-- DUAL FRP COLUMNS -->
  <!-- Column 1 (Left) -->
  <g transform="translate(120, 60)">
    <!-- Multiport Valve Top -->
    <rect x="42" y="15" width="26" height="25" rx="3" fill="#0F172A"/>
    <rect x="25" y="22" width="60" height="12" rx="4" fill="#334155"/>
    <circle cx="55" cy="10" r="8" fill="#10B981"/>
    <!-- Dome Top -->
    <path d="M 10,75 Q 55,35 100,75 Z" fill="url(#frpVesselBlue)"/>
    <!-- Cylinder -->
    <rect x="10" y="73" width="90" height="260" fill="url(#frpVesselBlue)"/>
    <!-- Dome Base & Stand -->
    <path d="M 0,330 L 110,330 L 100,355 L 10,355 Z" fill="#0F172A"/>
    <!-- Brand Badge -->
    <rect x="25" y="160" width="60" height="42" rx="4" fill="#FFFFFF"/>
    <text x="55" y="178" font-family="'Inter', sans-serif" font-size="8" font-weight="900" fill="#0284C7" text-anchor="middle">PENTAIR</text>
    <text x="55" y="192" font-family="'Inter', sans-serif" font-size="7" font-weight="700" fill="#334155" text-anchor="middle">IRON REMOVAL</text>
  </g>

  <!-- Interconnecting bypass pipe -->
  <path d="M 175,100 L 250,100 L 325,100" stroke="#0284C7" stroke-width="10" fill="none"/>
  <circle cx="250" cy="100" r="10" fill="#DC2626"/>

  <!-- Column 2 (Right) -->
  <g transform="translate(270, 60)">
    <!-- Multiport Valve Top -->
    <rect x="42" y="15" width="26" height="25" rx="3" fill="#0F172A"/>
    <rect x="25" y="22" width="60" height="12" rx="4" fill="#334155"/>
    <circle cx="55" cy="10" r="8" fill="#10B981"/>
    <!-- Dome Top -->
    <path d="M 10,75 Q 55,35 100,75 Z" fill="url(#frpVesselBlue)"/>
    <!-- Cylinder -->
    <rect x="10" y="73" width="90" height="260" fill="url(#frpVesselBlue)"/>
    <!-- Dome Base & Stand -->
    <path d="M 0,330 L 110,330 L 100,355 L 10,355 Z" fill="#0F172A"/>
    <!-- Brand Badge -->
    <rect x="25" y="160" width="60" height="42" rx="4" fill="#FFFFFF"/>
    <text x="55" y="178" font-family="'Inter', sans-serif" font-size="8" font-weight="900" fill="#103B66" text-anchor="middle">TATA STEEL</text>
    <text x="55" y="192" font-family="'Inter', sans-serif" font-size="7" font-weight="700" fill="#334155" text-anchor="middle">CARBON FILTER</text>
  </g>

  <!-- Feature Badge Bottom -->
  <rect x="80" y="430" width="340" height="40" rx="8" fill="#103B66"/>
  <text x="250" y="455" font-family="'Inter', sans-serif" font-size="12" font-weight="bold" fill="#28C5D7" text-anchor="middle">Borewell &amp; Well Water • Zero Yellow Stains</text>
</svg>`;

// 5. Water Softener Plant
const waterSoftenerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="softBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="50%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
  </defs>
  <rect width="500" height="500" rx="20" fill="#F8FAFC"/>
  <circle cx="250" cy="250" r="190" fill="#EDE9FE" opacity="0.5"/>

  <!-- Cation Resin FRP Vessel (Left) -->
  <g transform="translate(130, 70)">
    <rect x="35" y="10" width="30" height="30" rx="4" fill="#0F172A"/>
    <circle cx="50" cy="18" r="6" fill="#10B981"/>
    <text x="50" y="32" font-family="sans-serif" font-size="6" fill="#FFF" font-weight="bold" text-anchor="middle">AUTO VALVE</text>
    <!-- Dome -->
    <path d="M 10,70 Q 50,30 90,70 Z" fill="url(#softBlue)"/>
    <rect x="10" y="68" width="80" height="250" fill="url(#softBlue)"/>
    <path d="M 0,315 L 100,315 L 90,340 L 10,340 Z" fill="#0F172A"/>
    <rect x="20" y="160" width="60" height="35" rx="4" fill="#FFFFFF"/>
    <text x="50" y="177" font-family="sans-serif" font-size="8" font-weight="bold" fill="#6D28D9" text-anchor="middle">ION-EXCHANGE</text>
    <text x="50" y="188" font-family="sans-serif" font-size="7" fill="#334155" text-anchor="middle">RESIN VESSEL</text>
  </g>

  <!-- Salt Brine Tank (Right) -->
  <g transform="translate(260, 160)">
    <rect x="10" y="0" width="110" height="190" rx="12" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2"/>
    <rect x="5" y="0" width="120" height="20" rx="6" fill="#334155"/>
    <text x="65" y="95" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F172A" text-anchor="middle">BRINE TANK</text>
    <text x="65" y="115" font-family="sans-serif" font-size="9" fill="#64748B" text-anchor="middle">Salt Regeneration</text>
    <circle cx="65" cy="140" r="14" fill="#7C3AED" opacity="0.2"/>
    <text x="65" y="144" font-family="sans-serif" font-size="10" font-weight="bold" fill="#6D28D9" text-anchor="middle">NaCl</text>
  </g>

  <!-- Connecting brine suction tube -->
  <path d="M 205,100 L 290,100 L 290,170" stroke="#7C3AED" stroke-width="4" fill="none"/>
</svg>`;

// 6. Multimedia & Activated Carbon Filter
const multimediaCarbonSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <rect width="500" height="500" rx="20" fill="#F8FAFC"/>
  <circle cx="250" cy="250" r="190" fill="#F0FDFA"/>
  <g transform="translate(100, 60)">
    <!-- Vessel Cutaway showing media layers -->
    <rect x="40" y="60" width="120" height="280" rx="15" fill="#0F766E"/>
    <!-- Multiport valve -->
    <rect x="85" y="20" width="30" height="40" rx="4" fill="#1E293B"/>
    <!-- Layers inside -->
    <rect x="50" y="80" width="100" height="60" fill="#0F172A" opacity="0.9"/>
    <text x="100" y="115" font-family="sans-serif" font-size="9" fill="#FFF" font-weight="bold" text-anchor="middle">ACTIVATED CARBON</text>
    <rect x="50" y="145" width="100" height="60" fill="#D97706" opacity="0.8"/>
    <text x="100" y="180" font-family="sans-serif" font-size="9" fill="#FFF" font-weight="bold" text-anchor="middle">GARNET &amp; BIRM</text>
    <rect x="50" y="210" width="100" height="60" fill="#E2E8F0" opacity="0.9"/>
    <text x="100" y="245" font-family="sans-serif" font-size="9" fill="#1E293B" font-weight="bold" text-anchor="middle">QUARTZ SILICA</text>
    <rect x="50" y="275" width="100" height="55" fill="#64748B" opacity="0.9"/>
    <text x="100" y="305" font-family="sans-serif" font-size="8" fill="#FFF" font-weight="bold" text-anchor="middle">GRAVEL BED</text>
  </g>
  <g transform="translate(250, 100)">
    <rect width="180" height="220" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
    <text x="90" y="35" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0F766E" text-anchor="middle">4-STAGE DEPTH</text>
    <line x1="20" y1="50" x2="160" y2="50" stroke="#E2E8F0"/>
    <text x="30" y="75" font-family="sans-serif" font-size="10" fill="#334155">✓ Odor Absorption</text>
    <text x="30" y="105" font-family="sans-serif" font-size="10" fill="#334155">✓ Turbidity &lt; 1 NTU</text>
    <text x="30" y="135" font-family="sans-serif" font-size="10" fill="#334155">✓ Chlorine Removal</text>
    <text x="30" y="165" font-family="sans-serif" font-size="10" fill="#334155">✓ High Backwash Flow</text>
    <rect x="25" y="185" width="130" height="24" rx="4" fill="#0F766E"/>
    <text x="90" y="201" font-family="sans-serif" font-size="9" font-weight="bold" fill="#FFF" text-anchor="middle">CRYSTAL CLARITY</text>
  </g>
</svg>`;

// 7. Commercial 250 LPH RO Plant
const commercialRo250Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <rect width="500" height="500" rx="20" fill="#F8FAFC"/>
  <circle cx="250" cy="250" r="190" fill="#E0F2FE" opacity="0.5"/>
  <g transform="translate(60, 80)">
    <!-- Stainless Steel Skid Frame -->
    <rect x="20" y="270" width="340" height="20" rx="4" fill="#94A3B8"/>
    <rect x="30" y="70" width="16" height="200" fill="#CBD5E1"/>
    <rect x="330" y="70" width="16" height="200" fill="#CBD5E1"/>

    <!-- FRP Pretreatment Vessel -->
    <rect x="60" y="80" width="55" height="190" rx="10" fill="#0284C7"/>
    <rect x="75" y="55" width="25" height="25" rx="3" fill="#0F172A"/>

    <!-- Micron Filter Cartridge -->
    <rect x="135" y="130" width="30" height="140" rx="6" fill="#38BDF8"/>

    <!-- Vertical Booster Pump -->
    <rect x="185" y="140" width="28" height="130" rx="4" fill="#64748B"/>
    <circle cx="199" cy="125" r="14" fill="#0369A1"/>

    <!-- Single 4040 Membrane Housing Horizontal -->
    <rect x="230" y="110" width="120" height="35" rx="17" fill="#CBD5E1" stroke="#475569" stroke-width="2"/>
    <text x="290" y="132" font-family="sans-serif" font-size="8" font-weight="bold" fill="#0F172A" text-anchor="middle">4040 MEMBRANE</text>

    <!-- Control Box & Gauges -->
    <rect x="235" y="165" width="110" height="95" rx="6" fill="#0F172A"/>
    <circle cx="255" cy="195" r="10" fill="#FFF"/>
    <circle cx="285" cy="195" r="10" fill="#FFF"/>
    <text x="290" y="240" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#38BDF8" text-anchor="middle">250 LPH RO</text>
  </g>
</svg>`;

// 8. Commercial 500 LPH RO Plant
const commercialRo500Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <rect width="500" height="500" rx="20" fill="#F8FAFC"/>
  <circle cx="250" cy="250" r="190" fill="#E0F2FE" opacity="0.6"/>
  <g transform="translate(50, 70)">
    <!-- Base SS Frame -->
    <rect x="20" y="290" width="360" height="20" rx="4" fill="#64748B"/>
    <!-- Dual FRP Vessels -->
    <rect x="40" y="80" width="50" height="210" rx="10" fill="#0284C7"/>
    <rect x="100" y="80" width="50" height="210" rx="10" fill="#0369A1"/>
    <!-- 20-inch Jumbo Filter -->
    <rect x="165" y="140" width="35" height="150" rx="6" fill="#38BDF8"/>
    <!-- Vertical High Pressure Pump -->
    <rect x="215" y="140" width="32" height="150" rx="4" fill="#94A3B8"/>
    <circle cx="231" cy="120" r="16" fill="#0284C7"/>
    <!-- Dual Membrane Housings 4040 -->
    <rect x="260" y="90" width="130" height="32" rx="16" fill="#CBD5E1" stroke="#334155" stroke-width="2"/>
    <text x="325" y="110" font-family="sans-serif" font-size="8" font-weight="bold" fill="#0A2540" text-anchor="middle">RO MEMBRANE 1</text>
    <rect x="260" y="130" width="130" height="32" rx="16" fill="#CBD5E1" stroke="#334155" stroke-width="2"/>
    <text x="325" y="150" font-family="sans-serif" font-size="8" font-weight="bold" fill="#0A2540" text-anchor="middle">RO MEMBRANE 2</text>
    <!-- PLC Panel -->
    <rect x="260" y="180" width="130" height="100" rx="6" fill="#1E293B"/>
    <rect x="270" y="195" width="110" height="25" rx="3" fill="#064E3B"/>
    <text x="325" y="211" font-family="monospace" font-size="9" fill="#34D399" text-anchor="middle">500 LPH • ACTIVE</text>
    <circle cx="285" cy="245" r="9" fill="#FFF"/>
    <circle cx="310" cy="245" r="9" fill="#FFF"/>
    <circle cx="335" cy="245" r="9" fill="#FFF"/>
  </g>
</svg>`;

// 9. Industrial 1000 LPH RO Plant
const industrialRoPlantSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <rect width="500" height="500" rx="20" fill="#0A2540"/>
  <circle cx="250" cy="250" r="190" fill="#103B66" opacity="0.6"/>
  <g transform="translate(40, 60)">
    <!-- Structural Beams -->
    <rect x="20" y="320" width="380" height="24" rx="4" fill="#94A3B8"/>
    <!-- 3 Large FRP vessels -->
    <rect x="30" y="70" width="55" height="250" rx="12" fill="#0284C7"/>
    <rect x="95" y="70" width="55" height="250" rx="12" fill="#0369A1"/>
    <rect x="160" y="70" width="55" height="250" rx="12" fill="#075985"/>
    <!-- 3 Horizontal Pressure Vessels (8040 / 4040 multi-element) -->
    <rect x="230" y="70" width="170" height="35" rx="17" fill="#E2E8F0" stroke="#475569" stroke-width="2"/>
    <rect x="230" y="115" width="170" height="35" rx="17" fill="#E2E8F0" stroke="#475569" stroke-width="2"/>
    <rect x="230" y="160" width="170" height="35" rx="17" fill="#E2E8F0" stroke="#475569" stroke-width="2"/>
    <!-- Industrial PLC Touch Screen Panel -->
    <rect x="230" y="210" width="170" height="100" rx="6" fill="#0F172A" stroke="#28C5D7" stroke-width="2"/>
    <rect x="245" y="225" width="140" height="35" rx="4" fill="#022C22"/>
    <text x="315" y="247" font-family="monospace" font-size="11" font-weight="bold" fill="#2DD4BF" text-anchor="middle">1000 LPH • TDS 15</text>
    <text x="315" y="290" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">GRAVITY INDUSTRIAL</text>
  </g>
</svg>`;

// 10. Commercial Water Cooler (40/80 L)
const commercialWaterCoolerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="ss304" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#CBD5E1"/>
      <stop offset="30%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#94A3B8"/>
      <stop offset="100%" stop-color="#64748B"/>
    </linearGradient>
  </defs>
  <rect width="500" height="500" rx="20" fill="#F8FAFC"/>
  <circle cx="250" cy="250" r="190" fill="#E0F2FE" opacity="0.6"/>

  <g transform="translate(140, 50)">
    <!-- Stainless Steel Body Cabinet -->
    <rect x="0" y="0" width="220" height="380" rx="8" fill="url(#ss304)" stroke="#64748B" stroke-width="2"/>
    <!-- Top Drip/Splash Guard Rim -->
    <rect x="-10" y="0" width="240" height="20" rx="4" fill="#475569"/>
    <!-- Top Basin Sink -->
    <rect x="10" y="25" width="200" height="25" rx="6" fill="#F1F5F9" stroke="#94A3B8"/>
    <!-- Dual Dispensing Taps (1 Cold, 1 Normal) -->
    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="12" height="35" rx="3" fill="#0284C7"/>
      <circle cx="6" cy="35" r="8" fill="#38BDF8"/>
      <text x="6" y="55" font-family="sans-serif" font-size="8" font-weight="bold" fill="#0369A1" text-anchor="middle">COLD</text>
    </g>
    <g transform="translate(140, 60)">
      <rect x="0" y="0" width="12" height="35" rx="3" fill="#64748B"/>
      <circle cx="6" cy="35" r="8" fill="#94A3B8"/>
      <text x="6" y="55" font-family="sans-serif" font-size="8" font-weight="bold" fill="#475569" text-anchor="middle">NORMAL</text>
    </g>
    <!-- Louver Air Ventilation Grill (Middle/Lower) -->
    <g transform="translate(30, 150)">
      <rect x="0" y="0" width="160" height="170" rx="6" fill="#334155"/>
      <line x1="20" y1="20" x2="140" y2="20" stroke="#94A3B8" stroke-width="3"/>
      <line x1="20" y1="40" x2="140" y2="40" stroke="#94A3B8" stroke-width="3"/>
      <line x1="20" y1="60" x2="140" y2="60" stroke="#94A3B8" stroke-width="3"/>
      <line x1="20" y1="80" x2="140" y2="80" stroke="#94A3B8" stroke-width="3"/>
      <line x1="20" y1="100" x2="140" y2="100" stroke="#94A3B8" stroke-width="3"/>
      <line x1="20" y1="120" x2="140" y2="120" stroke="#94A3B8" stroke-width="3"/>
      <line x1="20" y1="140" x2="140" y2="140" stroke="#94A3B8" stroke-width="3"/>
    </g>
    <!-- Brand Emboss -->
    <rect x="40" y="335" width="140" height="24" rx="4" fill="#0F172A"/>
    <text x="110" y="351" font-family="'Inter', sans-serif" font-size="10" font-weight="bold" fill="#38BDF8" text-anchor="middle">GRAVITY 40/80L SS-304</text>
  </g>
</svg>`;

// 11. Water Cooler with RO (60/120 L)
const coolerWithRoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="coolerSs" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="50%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#94A3B8"/>
    </linearGradient>
  </defs>
  <rect width="500" height="500" rx="20" fill="#F8FAFC"/>
  <circle cx="250" cy="250" r="190" fill="#E0F2FE" opacity="0.6"/>
  <g transform="translate(120, 40)">
    <rect x="0" y="0" width="260" height="400" rx="8" fill="url(#coolerSs)" stroke="#64748B" stroke-width="2"/>
    <!-- Top Dispensing Station with 3 Taps -->
    <rect x="15" y="20" width="230" height="30" rx="6" fill="#F1F5F9" stroke="#94A3B8"/>
    <circle cx="60" cy="80" r="10" fill="#0284C7"/>
    <circle cx="130" cy="80" r="10" fill="#0284C7"/>
    <circle cx="200" cy="80" r="10" fill="#94A3B8"/>
    <text x="60" y="105" font-family="sans-serif" font-size="7" font-weight="bold" fill="#0369A1" text-anchor="middle">COLD 1</text>
    <text x="130" y="105" font-family="sans-serif" font-size="7" font-weight="bold" fill="#0369A1" text-anchor="middle">COLD 2</text>
    <text x="200" y="105" font-family="sans-serif" font-size="7" font-weight="bold" fill="#475569" text-anchor="middle">NORMAL</text>
    <!-- Internal Built-in RO System Display Window -->
    <rect x="25" y="125" width="210" height="85" rx="6" fill="#0F172A"/>
    <text x="130" y="150" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#38BDF8" text-anchor="middle">BUILT-IN 50 LPH RO PLANT</text>
    <text x="130" y="170" font-family="sans-serif" font-size="9" fill="#94A3B8" text-anchor="middle">Continuous Auto-Refill • Zero Bottles</text>
    <circle cx="80" cy="190" r="4" fill="#22C55E"/>
    <text x="130" y="193" font-family="sans-serif" font-size="8" fill="#34D399" text-anchor="middle">UV STERILIZED &amp; COOLED</text>
    <!-- Louvers lower -->
    <rect x="25" y="230" width="210" height="140" rx="6" fill="#334155"/>
    <text x="130" y="305" font-family="'Inter', sans-serif" font-size="13" font-weight="900" fill="#FFFFFF" text-anchor="middle">GRAVITY 60/120 RO</text>
  </g>
</svg>`;

// 12. Industrial Water Cooler (100/200 L)
const industrialWaterCoolerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <rect width="500" height="500" rx="20" fill="#F8FAFC"/>
  <circle cx="250" cy="250" r="190" fill="#E2E8F0"/>
  <g transform="translate(100, 40)">
    <!-- Extra Wide SS Body -->
    <rect x="0" y="0" width="300" height="400" rx="8" fill="#CBD5E1" stroke="#475569" stroke-width="2"/>
    <!-- 4 Faucets -->
    <circle cx="50" cy="80" r="10" fill="#0284C7"/>
    <circle cx="115" cy="80" r="10" fill="#0284C7"/>
    <circle cx="185" cy="80" r="10" fill="#0284C7"/>
    <circle cx="250" cy="80" r="10" fill="#64748B"/>
    <!-- Dual Cooling Fan Grills -->
    <circle cx="90" cy="230" r="55" fill="#1E293B" stroke="#475569" stroke-width="3"/>
    <circle cx="210" cy="230" r="55" fill="#1E293B" stroke="#475569" stroke-width="3"/>
    <text x="150" y="340" font-family="'Inter', sans-serif" font-size="14" font-weight="900" fill="#0F172A" text-anchor="middle">100/200 LITRE INDUSTRIAL CHILLER</text>
    <text x="150" y="365" font-family="sans-serif" font-size="10" fill="#475569" text-anchor="middle">Heavy-Duty Tropical Compressor • SS-304</text>
  </g>
</svg>`;

const files = {
  'domestic-ro-purifier.svg': domesticRoSvg,
  'undersink-ro.svg': undersinkRoSvg,
  'copper-alkaline-ro.svg': copperAlkalineRoSvg,
  'whole-house-filtration.svg': wholeHouseFiltrationSvg,
  'water-softener.svg': waterSoftenerSvg,
  'multimedia-carbon-filter.svg': multimediaCarbonSvg,
  'commercial-ro-250.svg': commercialRo250Svg,
  'commercial-ro-500.svg': commercialRo500Svg,
  'industrial-ro-plant.svg': industrialRoPlantSvg,
  'commercial-water-cooler.svg': commercialWaterCoolerSvg,
  'cooler-with-ro.svg': coolerWithRoSvg,
  'industrial-water-cooler.svg': industrialWaterCoolerSvg,
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(outDir, filename), content.trim(), 'utf8');
  console.log('Created:', filename);
}
