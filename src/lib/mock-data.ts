/**
 * Comprehensive mock data for IIROS - used when backend is unavailable.
 * This provides rich, realistic data for every API endpoint so the
 * full dashboard can be showcased without any backend connection.
 */

import type {
  Device,
  Recommendation,
  AnalyticsTrend,
  PeakHour,
  DeviceBreakdown,
  ForecastPoint,
} from "./types";

// ─── Devices ──────────────────────────────────────────────────────

export const mockDevices: Device[] = [
  { id: "d1", name: "HVAC Unit A — Main Hall", type: "hvac", location: "Building A, Floor 1", status: "online", consumption: 342, efficiency: 87, lastReading: "2 min ago", health: 92 },
  { id: "d2", name: "LED Panel Array B2", type: "lighting", location: "Building B, Floor 2", status: "online", consumption: 45, efficiency: 96, lastReading: "1 min ago", health: 98 },
  { id: "d3", name: "Server Room Cooling", type: "hvac", location: "Data Center", status: "warning", consumption: 520, efficiency: 71, lastReading: "5 min ago", health: 64 },
  { id: "d4", name: "Solar Inverter #1", type: "solar", location: "Rooftop A", status: "online", consumption: -180, efficiency: 94, lastReading: "1 min ago", health: 96 },
  { id: "d5", name: "Smart Meter — West Wing", type: "meter", location: "Building C", status: "online", consumption: 267, efficiency: 82, lastReading: "3 min ago", health: 88 },
  { id: "d6", name: "Lab Equipment Cluster", type: "equipment", location: "Building A, Floor 3", status: "maintenance", consumption: 0, efficiency: 0, lastReading: "2 hrs ago", health: 35 },
  { id: "d7", name: "HVAC Unit C — Library", type: "hvac", location: "Library Wing", status: "online", consumption: 198, efficiency: 91, lastReading: "1 min ago", health: 94 },
  { id: "d8", name: "Outdoor Lighting Grid", type: "lighting", location: "Campus Grounds", status: "online", consumption: 78, efficiency: 88, lastReading: "2 min ago", health: 90 },
  { id: "d9", name: "Backup Generator", type: "equipment", location: "Utility Block", status: "offline", consumption: 0, efficiency: 0, lastReading: "1 day ago", health: 72 },
  { id: "d10", name: "IoT Sensor Network", type: "sensor", location: "All Buildings", status: "online", consumption: 12, efficiency: 99, lastReading: "30 sec ago", health: 99 },
  { id: "d11", name: "Solar Inverter #2", type: "solar", location: "Rooftop B", status: "online", consumption: -145, efficiency: 92, lastReading: "1 min ago", health: 93 },
  { id: "d12", name: "Water Heater System", type: "equipment", location: "Building A, Basement", status: "online", consumption: 156, efficiency: 78, lastReading: "4 min ago", health: 81 },
  { id: "d13", name: "Conference Room HVAC", type: "hvac", location: "Building B, Floor 3", status: "online", consumption: 125, efficiency: 85, lastReading: "2 min ago", health: 89 },
  { id: "d14", name: "Parking Lot Lights", type: "lighting", location: "East Parking", status: "online", consumption: 65, efficiency: 91, lastReading: "3 min ago", health: 95 },
  { id: "d15", name: "EV Charging Station", type: "equipment", location: "Main Entrance", status: "online", consumption: 210, efficiency: 95, lastReading: "1 min ago", health: 97 },
  { id: "d16", name: "Smart Thermostat Hub", type: "sensor", location: "Building C, Floor 1", status: "online", consumption: 4, efficiency: 99, lastReading: "10 sec ago", health: 100 },
];

// ─── Recommendations ──────────────────────────────────────────────

export const mockRecommendations: Recommendation[] = [
  {
    id: "r1",
    title: "Optimize HVAC scheduling during off-peak hours",
    description: "Analysis shows HVAC units run at full capacity during unoccupied hours (10 PM - 6 AM). Implementing smart scheduling could reduce consumption by 23%. The AI model predicts a payback period of 3 months based on current energy pricing.",
    impact: "high",
    category: "energy",
    estimated_savings: 4200,
    priority_score: 1,
    status: "pending",
    ai_confidence: 0.96,
  },
  {
    id: "r2",
    title: "Replace Server Room Cooling with liquid cooling",
    description: "Server Room Cooling unit is operating at 71% efficiency. Transitioning to modern liquid cooling could improve efficiency by 25% and extend equipment life by 5+ years. Current thermal readings show suboptimal heat dissipation.",
    impact: "high",
    category: "cost",
    estimated_savings: 8500,
    priority_score: 2,
    status: "pending",
    ai_confidence: 0.91,
  },
  {
    id: "r3",
    title: "Install motion sensors for lighting automation",
    description: "Outdoor and corridor lighting operates continuously. Motion-based activation would cut lighting costs by 40% while maintaining safety standards. Recommended sensors: Philips Hue Outdoor with 12m detection range.",
    impact: "medium",
    category: "sustainability",
    estimated_savings: 2100,
    priority_score: 3,
    status: "implemented",
    ai_confidence: 0.98,
  },
  {
    id: "r4",
    title: "Schedule Lab Equipment maintenance cycle",
    description: "Lab Equipment Cluster has been offline. Preventive maintenance scheduling could prevent 15% of equipment failures and reduce downtime. Predictive models indicate imminent bearing failure in centrifuge unit.",
    impact: "medium",
    category: "maintenance",
    estimated_savings: 3200,
    priority_score: 4,
    status: "pending",
    ai_confidence: 0.87,
  },
  {
    id: "r5",
    title: "Expand solar panel capacity on Rooftop C",
    description: "Current solar generation covers 18% of total consumption. Adding panels on Rooftop C could increase coverage to 32%, yielding significant long-term savings. Structural analysis confirms load-bearing capacity.",
    impact: "high",
    category: "sustainability",
    estimated_savings: 12000,
    priority_score: 5,
    status: "pending",
    ai_confidence: 0.94,
  },
  {
    id: "r6",
    title: "Implement demand response protocol",
    description: "During peak grid demand (2-5 PM), shifting non-critical loads to off-peak hours could reduce peak charges by 30%. Smart load-shedding algorithm would prioritize critical systems automatically.",
    impact: "medium",
    category: "cost",
    estimated_savings: 3800,
    priority_score: 6,
    status: "pending",
    ai_confidence: 0.89,
  },
  {
    id: "r7",
    title: "Deploy smart window tinting in Building B",
    description: "Electrochromic smart glass on south-facing windows would reduce HVAC load by 18% through automatic solar heat gain management. ROI estimated at 14 months.",
    impact: "medium",
    category: "energy",
    estimated_savings: 2800,
    priority_score: 7,
    status: "pending",
    ai_confidence: 0.85,
  },
  {
    id: "r8",
    title: "Upgrade to variable-frequency drives on pumps",
    description: "Water circulation pumps in the heating system run at fixed speed. Variable-frequency drives would reduce pump energy consumption by 35% by matching motor speed to actual demand.",
    impact: "high",
    category: "energy",
    estimated_savings: 5600,
    priority_score: 8,
    status: "pending",
    ai_confidence: 0.93,
  },
];

// ─── Analytics Trends ─────────────────────────────────────────────

export const mockEnergyTrends: AnalyticsTrend[] = [
  {
    "date": "Jun 1",
    "consumption": 2479,
    "baseline": 2700,
    "optimized": 2232,
    "cost": 315
  },
  {
    "date": "Jun 2",
    "consumption": 2570,
    "baseline": 2818,
    "optimized": 2351,
    "cost": 324
  },
  {
    "date": "Jun 3",
    "consumption": 2823,
    "baseline": 2926,
    "optimized": 2435,
    "cost": 317
  },
  {
    "date": "Jun 4",
    "consumption": 2791,
    "baseline": 3013,
    "optimized": 2567,
    "cost": 336
  },
  {
    "date": "Jun 5",
    "consumption": 2882,
    "baseline": 3073,
    "optimized": 2599,
    "cost": 358
  },
  {
    "date": "Jun 6",
    "consumption": 2993,
    "baseline": 3099,
    "optimized": 2640,
    "cost": 353
  },
  {
    "date": "Jun 7",
    "consumption": 2931,
    "baseline": 3090,
    "optimized": 2666,
    "cost": 363
  },
  {
    "date": "Jun 8",
    "consumption": 2779,
    "baseline": 3045,
    "optimized": 2637,
    "cost": 334
  },
  {
    "date": "Jun 9",
    "consumption": 2800,
    "baseline": 2970,
    "optimized": 2515,
    "cost": 325
  },
  {
    "date": "Jun 10",
    "consumption": 2664,
    "baseline": 2871,
    "optimized": 2373,
    "cost": 323
  },
  {
    "date": "Jun 11",
    "consumption": 2622,
    "baseline": 2756,
    "optimized": 2283,
    "cost": 322
  },
  {
    "date": "Jun 12",
    "consumption": 2464,
    "baseline": 2637,
    "optimized": 2172,
    "cost": 304
  },
  {
    "date": "Jun 13",
    "consumption": 2286,
    "baseline": 2523,
    "optimized": 2094,
    "cost": 270
  },
  {
    "date": "Jun 14",
    "consumption": 2242,
    "baseline": 2425,
    "optimized": 1968,
    "cost": 261
  },
  {
    "date": "Jun 15",
    "consumption": 2215,
    "baseline": 2351,
    "optimized": 1882,
    "cost": 263
  },
  {
    "date": "Jun 16",
    "consumption": 2172,
    "baseline": 2309,
    "optimized": 1826,
    "cost": 263
  },
  {
    "date": "Jun 17",
    "consumption": 2007,
    "baseline": 2302,
    "optimized": 1818,
    "cost": 258
  },
  {
    "date": "Jun 18",
    "consumption": 2181,
    "baseline": 2330,
    "optimized": 1882,
    "cost": 247
  },
  {
    "date": "Jun 19",
    "consumption": 2162,
    "baseline": 2391,
    "optimized": 1934,
    "cost": 261
  },
  {
    "date": "Jun 20",
    "consumption": 2281,
    "baseline": 2480,
    "optimized": 2029,
    "cost": 268
  },
  {
    "date": "Jun 21",
    "consumption": 2370,
    "baseline": 2588,
    "optimized": 2166,
    "cost": 297
  },
  {
    "date": "Jun 22",
    "consumption": 2501,
    "baseline": 2707,
    "optimized": 2218,
    "cost": 303
  },
  {
    "date": "Jun 23",
    "consumption": 2687,
    "baseline": 2825,
    "optimized": 2351,
    "cost": 324
  },
  {
    "date": "Jun 24",
    "consumption": 2809,
    "baseline": 2931,
    "optimized": 2502,
    "cost": 322
  },
  {
    "date": "Jun 25",
    "consumption": 2868,
    "baseline": 3017,
    "optimized": 2567,
    "cost": 335
  },
  {
    "date": "Jun 26",
    "consumption": 2912,
    "baseline": 3075,
    "optimized": 2601,
    "cost": 347
  },
  {
    "date": "Jun 27",
    "consumption": 2935,
    "baseline": 3099,
    "optimized": 2686,
    "cost": 352
  },
  {
    "date": "Jun 28",
    "consumption": 2972,
    "baseline": 3088,
    "optimized": 2676,
    "cost": 363
  },
  {
    "date": "Jun 29",
    "consumption": 2820,
    "baseline": 3042,
    "optimized": 2596,
    "cost": 353
  },
  {
    "date": "Jun 30",
    "consumption": 2750,
    "baseline": 2965,
    "optimized": 2494,
    "cost": 339
  }
];

// ─── Peak Hours ───────────────────────────────────────────────────

export const mockPeakHours: PeakHour[] = [
  {
    "hour": "00:00",
    "consumption": 149,
    "average": 85
  },
  {
    "hour": "01:00",
    "consumption": 102,
    "average": 85
  },
  {
    "hour": "02:00",
    "consumption": 112,
    "average": 85
  },
  {
    "hour": "03:00",
    "consumption": 127,
    "average": 85
  },
  {
    "hour": "04:00",
    "consumption": 143,
    "average": 85
  },
  {
    "hour": "05:00",
    "consumption": 143,
    "average": 85
  },
  {
    "hour": "06:00",
    "consumption": 149,
    "average": 85
  },
  {
    "hour": "07:00",
    "consumption": 130,
    "average": 85
  },
  {
    "hour": "08:00",
    "consumption": 344,
    "average": 255
  },
  {
    "hour": "09:00",
    "consumption": 366,
    "average": 294
  },
  {
    "hour": "10:00",
    "consumption": 418,
    "average": 329
  },
  {
    "hour": "11:00",
    "consumption": 443,
    "average": 357
  },
  {
    "hour": "12:00",
    "consumption": 490,
    "average": 376
  },
  {
    "hour": "13:00",
    "consumption": 484,
    "average": 382
  },
  {
    "hour": "14:00",
    "consumption": 465,
    "average": 377
  },
  {
    "hour": "15:00",
    "consumption": 467,
    "average": 360
  },
  {
    "hour": "16:00",
    "consumption": 440,
    "average": 333
  },
  {
    "hour": "17:00",
    "consumption": 398,
    "average": 299
  },
  {
    "hour": "18:00",
    "consumption": 332,
    "average": 260
  },
  {
    "hour": "19:00",
    "consumption": 113,
    "average": 85
  },
  {
    "hour": "20:00",
    "consumption": 145,
    "average": 85
  },
  {
    "hour": "21:00",
    "consumption": 133,
    "average": 85
  },
  {
    "hour": "22:00",
    "consumption": 134,
    "average": 85
  },
  {
    "hour": "23:00",
    "consumption": 104,
    "average": 85
  }
];

// ─── Device Breakdown ─────────────────────────────────────────────

export const mockDeviceBreakdown: DeviceBreakdown[] = [
  { type: "HVAC", consumption: 1185, percentage: 42, color: "#3B82F6" },
  { type: "Lighting", consumption: 388, percentage: 14, color: "#10B981" },
  { type: "Equipment", consumption: 581, percentage: 21, color: "#F59E0B" },
  { type: "Solar (Gen)", consumption: -325, percentage: -12, color: "#8B5CF6" },
  { type: "EV Charging", consumption: 210, percentage: 7, color: "#EC4899" },
  { type: "Sensors & IoT", consumption: 16, percentage: 1, color: "#6366F1" },
  { type: "Other", consumption: 423, percentage: 15, color: "#78716C" },
];

// ─── Forecast ─────────────────────────────────────────────────────

export const mockForecastData: ForecastPoint[] = [
  {
    "date": "Jun 15",
    "actual": 2274,
    "predicted": 2250,
    "lower": 2050,
    "upper": 2450
  },
  {
    "date": "Jun 16",
    "actual": 2393,
    "predicted": 2367,
    "lower": 2167,
    "upper": 2567
  },
  {
    "date": "Jun 17",
    "actual": 2455,
    "predicted": 2465,
    "lower": 2265,
    "upper": 2665
  },
  {
    "date": "Jun 18",
    "actual": 2526,
    "predicted": 2530,
    "lower": 2330,
    "upper": 2730
  },
  {
    "date": "Jun 19",
    "actual": 2557,
    "predicted": 2550,
    "lower": 2350,
    "upper": 2750
  },
  {
    "date": "Jun 20",
    "actual": 2558,
    "predicted": 2523,
    "lower": 2323,
    "upper": 2723
  },
  {
    "date": "Jun 21",
    "actual": 2534,
    "predicted": 2453,
    "lower": 2253,
    "upper": 2653
  },
  {
    "date": "Jun 22",
    "actual": null,
    "predicted": 2350,
    "lower": 2150,
    "upper": 2550
  },
  {
    "date": "Jun 23",
    "actual": null,
    "predicted": 2232,
    "lower": 2032,
    "upper": 2432
  },
  {
    "date": "Jun 24",
    "actual": null,
    "predicted": 2117,
    "lower": 1917,
    "upper": 2317
  },
  {
    "date": "Jun 25",
    "actual": null,
    "predicted": 2023,
    "lower": 1823,
    "upper": 2223
  },
  {
    "date": "Jun 26",
    "actual": null,
    "predicted": 1965,
    "lower": 1765,
    "upper": 2165
  },
  {
    "date": "Jun 27",
    "actual": null,
    "predicted": 1951,
    "lower": 1751,
    "upper": 2151
  },
  {
    "date": "Jun 28",
    "actual": null,
    "predicted": 1985,
    "lower": 1785,
    "upper": 2185
  }
];

// ─── Analytics Summary (KPI) ─────────────────────────────────────

export const mockAnalyticsSummary = {
  total_consumption: 2847,
  active_devices: 13,
  estimated_cost: 398.58,
  carbon_footprint: 1.42,
};

// ─── AI Analysis ──────────────────────────────────────────────────

export const mockAIDeepAnalysis = {
  analysis: {
    overall_performance: "excellent - facility operating above industry benchmarks",
    key_findings: [
      "HVAC systems consume 42% of total energy but are running at 86% average efficiency",
      "Solar generation covers 18% of total demand, with room for 32% if Rooftop C is utilized",
      "Server room cooling unit is the primary efficiency bottleneck at 71%",
      "IoT sensor network provides real-time monitoring with 99.5% uptime",
      "Peak demand occurs consistently between 10 AM and 2 PM on weekdays",
    ],
    efficiency_opportunities: [
      {
        title: "Smart HVAC Scheduling",
        expected_impact: "23% reduction in HVAC energy during off-peak hours",
      },
      {
        title: "Server Room Cooling Upgrade",
        expected_impact: "25% improvement in cooling efficiency, Rs 8,500/year savings",
      },
      {
        title: "Demand Response Protocol",
        expected_impact: "30% reduction in peak-hour charges through load shifting",
      },
      {
        title: "Solar Expansion on Rooftop C",
        expected_impact: "14% increase in renewable energy coverage",
      },
    ],
    implementation_roadmap: [
      {
        phase: "Phase 1: Quick Wins (0-30 days)",
        expected_savings: "Rs 6,300/year",
        actions: [
          "Deploy smart scheduling on all HVAC units",
          "Install motion sensors on outdoor and corridor lighting",
          "Activate demand response protocol during 2-5 PM peak",
        ],
      },
      {
        phase: "Phase 2: Infrastructure (30-90 days)",
        expected_savings: "Rs 14,000/year",
        actions: [
          "Replace server room cooling with hybrid liquid cooling system",
          "Expand solar panel array to Rooftop C",
          "Install variable-frequency drives on water circulation pumps",
        ],
      },
      {
        phase: "Phase 3: Advanced AI (90-180 days)",
        expected_savings: "Rs 8,200/year",
        actions: [
          "Deploy predictive maintenance AI for all equipment",
          "Implement building-wide digital twin for optimization simulation",
          "Enable autonomous load balancing with machine learning",
        ],
      },
    ],
  },
  summary_metrics: {
    total_consumption_kwh: 68328,
    total_cost_usd: 9566,
    total_emissions_kg_co2: 34164,
    renewable_percentage: 18.2,
    devices_online: 13,
    devices_total: 16,
    avg_efficiency: 84.6,
    peak_demand_kw: 520,
  },
};

export const mockAISummary = {
  analysis: {
    summary:
      "Your facility is performing well with an overall efficiency rating of 84.6%. The HVAC system represents the largest optimization opportunity, with potential savings of Rs 4,200/year through smart scheduling alone. Solar panels are producing consistently but Rooftop C remains unutilized. The AI recommends prioritizing server room cooling upgrades and HVAC scheduling as immediate high-ROI actions.",
    key_insight:
      "Implementing just 3 recommended changes would reduce total energy consumption by 18% and save approximately Rs 14,500 annually while cutting carbon emissions by 24 tons/year.",
    cost_assessment:
      "Current monthly energy costs average Rs 9,566. With the proposed Phase 1 optimizations, this could be reduced to Rs 8,040—a 16% decrease achievable within the first month of implementation with minimal capital investment.",
  },
};

// ─── Reports ──────────────────────────────────────────────────────

export const mockReports = [
  {
    id: "rpt-001",
    title: "Monthly Optimization Report — June 2026",
    type: "monthly",
    created_at: "2026-06-10T14:30:00Z",
    executive_summary: "Overall facility energy efficiency improved by 4.2% compared to the previous month. Key drivers include the motion sensor deployment on outdoor lighting and improved HVAC scheduling.",
    total_savings: 6300,
    carbon_reduced: 840,
    full_report_data: {
      key_findings: [
        "Energy consumption reduced by 4.2% month-over-month",
        "Solar panel output increased 12% due to seasonal improvements",
        "Server room cooling efficiency dropped to 71%, requiring immediate attention",
        "New IoT sensor network providing 99.5% uptime for real-time monitoring",
        "EV charging station utilization at 78%, exceeding projections by 15%",
      ],
    },
  },
];

// ─── Heatmap ──────────────────────────────────────────────────────

export const mockHeatmapData = [
  {
    "day": "Mon",
    "hour": 0,
    "value": 39
  },
  {
    "day": "Mon",
    "hour": 1,
    "value": 48
  },
  {
    "day": "Mon",
    "hour": 2,
    "value": 44
  },
  {
    "day": "Mon",
    "hour": 3,
    "value": 21
  },
  {
    "day": "Mon",
    "hour": 4,
    "value": 27
  },
  {
    "day": "Mon",
    "hour": 5,
    "value": 33
  },
  {
    "day": "Mon",
    "hour": 6,
    "value": 21
  },
  {
    "day": "Mon",
    "hour": 7,
    "value": 39
  },
  {
    "day": "Mon",
    "hour": 8,
    "value": 80
  },
  {
    "day": "Mon",
    "hour": 9,
    "value": 85
  },
  {
    "day": "Mon",
    "hour": 10,
    "value": 93
  },
  {
    "day": "Mon",
    "hour": 11,
    "value": 95
  },
  {
    "day": "Mon",
    "hour": 12,
    "value": 94
  },
  {
    "day": "Mon",
    "hour": 13,
    "value": 99
  },
  {
    "day": "Mon",
    "hour": 14,
    "value": 89
  },
  {
    "day": "Mon",
    "hour": 15,
    "value": 63
  },
  {
    "day": "Mon",
    "hour": 16,
    "value": 99
  },
  {
    "day": "Mon",
    "hour": 17,
    "value": 91
  },
  {
    "day": "Mon",
    "hour": 18,
    "value": 72
  },
  {
    "day": "Mon",
    "hour": 19,
    "value": 39
  },
  {
    "day": "Mon",
    "hour": 20,
    "value": 46
  },
  {
    "day": "Mon",
    "hour": 21,
    "value": 30
  },
  {
    "day": "Mon",
    "hour": 22,
    "value": 23
  },
  {
    "day": "Mon",
    "hour": 23,
    "value": 26
  },
  {
    "day": "Tue",
    "hour": 0,
    "value": 30
  },
  {
    "day": "Tue",
    "hour": 1,
    "value": 32
  },
  {
    "day": "Tue",
    "hour": 2,
    "value": 31
  },
  {
    "day": "Tue",
    "hour": 3,
    "value": 47
  },
  {
    "day": "Tue",
    "hour": 4,
    "value": 38
  },
  {
    "day": "Tue",
    "hour": 5,
    "value": 33
  },
  {
    "day": "Tue",
    "hour": 6,
    "value": 21
  },
  {
    "day": "Tue",
    "hour": 7,
    "value": 48
  },
  {
    "day": "Tue",
    "hour": 8,
    "value": 65
  },
  {
    "day": "Tue",
    "hour": 9,
    "value": 62
  },
  {
    "day": "Tue",
    "hour": 10,
    "value": 64
  },
  {
    "day": "Tue",
    "hour": 11,
    "value": 86
  },
  {
    "day": "Tue",
    "hour": 12,
    "value": 90
  },
  {
    "day": "Tue",
    "hour": 13,
    "value": 94
  },
  {
    "day": "Tue",
    "hour": 14,
    "value": 88
  },
  {
    "day": "Tue",
    "hour": 15,
    "value": 84
  },
  {
    "day": "Tue",
    "hour": 16,
    "value": 95
  },
  {
    "day": "Tue",
    "hour": 17,
    "value": 93
  },
  {
    "day": "Tue",
    "hour": 18,
    "value": 75
  },
  {
    "day": "Tue",
    "hour": 19,
    "value": 29
  },
  {
    "day": "Tue",
    "hour": 20,
    "value": 47
  },
  {
    "day": "Tue",
    "hour": 21,
    "value": 38
  },
  {
    "day": "Tue",
    "hour": 22,
    "value": 49
  },
  {
    "day": "Tue",
    "hour": 23,
    "value": 46
  },
  {
    "day": "Wed",
    "hour": 0,
    "value": 45
  },
  {
    "day": "Wed",
    "hour": 1,
    "value": 44
  },
  {
    "day": "Wed",
    "hour": 2,
    "value": 37
  },
  {
    "day": "Wed",
    "hour": 3,
    "value": 22
  },
  {
    "day": "Wed",
    "hour": 4,
    "value": 38
  },
  {
    "day": "Wed",
    "hour": 5,
    "value": 50
  },
  {
    "day": "Wed",
    "hour": 6,
    "value": 47
  },
  {
    "day": "Wed",
    "hour": 7,
    "value": 46
  },
  {
    "day": "Wed",
    "hour": 8,
    "value": 70
  },
  {
    "day": "Wed",
    "hour": 9,
    "value": 73
  },
  {
    "day": "Wed",
    "hour": 10,
    "value": 65
  },
  {
    "day": "Wed",
    "hour": 11,
    "value": 99
  },
  {
    "day": "Wed",
    "hour": 12,
    "value": 84
  },
  {
    "day": "Wed",
    "hour": 13,
    "value": 81
  },
  {
    "day": "Wed",
    "hour": 14,
    "value": 81
  },
  {
    "day": "Wed",
    "hour": 15,
    "value": 97
  },
  {
    "day": "Wed",
    "hour": 16,
    "value": 97
  },
  {
    "day": "Wed",
    "hour": 17,
    "value": 64
  },
  {
    "day": "Wed",
    "hour": 18,
    "value": 88
  },
  {
    "day": "Wed",
    "hour": 19,
    "value": 30
  },
  {
    "day": "Wed",
    "hour": 20,
    "value": 38
  },
  {
    "day": "Wed",
    "hour": 21,
    "value": 43
  },
  {
    "day": "Wed",
    "hour": 22,
    "value": 23
  },
  {
    "day": "Wed",
    "hour": 23,
    "value": 36
  },
  {
    "day": "Thu",
    "hour": 0,
    "value": 49
  },
  {
    "day": "Thu",
    "hour": 1,
    "value": 45
  },
  {
    "day": "Thu",
    "hour": 2,
    "value": 31
  },
  {
    "day": "Thu",
    "hour": 3,
    "value": 35
  },
  {
    "day": "Thu",
    "hour": 4,
    "value": 27
  },
  {
    "day": "Thu",
    "hour": 5,
    "value": 35
  },
  {
    "day": "Thu",
    "hour": 6,
    "value": 37
  },
  {
    "day": "Thu",
    "hour": 7,
    "value": 36
  },
  {
    "day": "Thu",
    "hour": 8,
    "value": 80
  },
  {
    "day": "Thu",
    "hour": 9,
    "value": 91
  },
  {
    "day": "Thu",
    "hour": 10,
    "value": 68
  },
  {
    "day": "Thu",
    "hour": 11,
    "value": 60
  },
  {
    "day": "Thu",
    "hour": 12,
    "value": 83
  },
  {
    "day": "Thu",
    "hour": 13,
    "value": 86
  },
  {
    "day": "Thu",
    "hour": 14,
    "value": 86
  },
  {
    "day": "Thu",
    "hour": 15,
    "value": 81
  },
  {
    "day": "Thu",
    "hour": 16,
    "value": 69
  },
  {
    "day": "Thu",
    "hour": 17,
    "value": 71
  },
  {
    "day": "Thu",
    "hour": 18,
    "value": 71
  },
  {
    "day": "Thu",
    "hour": 19,
    "value": 20
  },
  {
    "day": "Thu",
    "hour": 20,
    "value": 50
  },
  {
    "day": "Thu",
    "hour": 21,
    "value": 48
  },
  {
    "day": "Thu",
    "hour": 22,
    "value": 24
  },
  {
    "day": "Thu",
    "hour": 23,
    "value": 41
  },
  {
    "day": "Fri",
    "hour": 0,
    "value": 27
  },
  {
    "day": "Fri",
    "hour": 1,
    "value": 39
  },
  {
    "day": "Fri",
    "hour": 2,
    "value": 28
  },
  {
    "day": "Fri",
    "hour": 3,
    "value": 45
  },
  {
    "day": "Fri",
    "hour": 4,
    "value": 35
  },
  {
    "day": "Fri",
    "hour": 5,
    "value": 38
  },
  {
    "day": "Fri",
    "hour": 6,
    "value": 32
  },
  {
    "day": "Fri",
    "hour": 7,
    "value": 24
  },
  {
    "day": "Fri",
    "hour": 8,
    "value": 94
  },
  {
    "day": "Fri",
    "hour": 9,
    "value": 61
  },
  {
    "day": "Fri",
    "hour": 10,
    "value": 98
  },
  {
    "day": "Fri",
    "hour": 11,
    "value": 72
  },
  {
    "day": "Fri",
    "hour": 12,
    "value": 91
  },
  {
    "day": "Fri",
    "hour": 13,
    "value": 83
  },
  {
    "day": "Fri",
    "hour": 14,
    "value": 87
  },
  {
    "day": "Fri",
    "hour": 15,
    "value": 61
  },
  {
    "day": "Fri",
    "hour": 16,
    "value": 62
  },
  {
    "day": "Fri",
    "hour": 17,
    "value": 86
  },
  {
    "day": "Fri",
    "hour": 18,
    "value": 84
  },
  {
    "day": "Fri",
    "hour": 19,
    "value": 26
  },
  {
    "day": "Fri",
    "hour": 20,
    "value": 41
  },
  {
    "day": "Fri",
    "hour": 21,
    "value": 24
  },
  {
    "day": "Fri",
    "hour": 22,
    "value": 38
  },
  {
    "day": "Fri",
    "hour": 23,
    "value": 41
  },
  {
    "day": "Sat",
    "hour": 0,
    "value": 23
  },
  {
    "day": "Sat",
    "hour": 1,
    "value": 45
  },
  {
    "day": "Sat",
    "hour": 2,
    "value": 50
  },
  {
    "day": "Sat",
    "hour": 3,
    "value": 41
  },
  {
    "day": "Sat",
    "hour": 4,
    "value": 38
  },
  {
    "day": "Sat",
    "hour": 5,
    "value": 41
  },
  {
    "day": "Sat",
    "hour": 6,
    "value": 44
  },
  {
    "day": "Sat",
    "hour": 7,
    "value": 44
  },
  {
    "day": "Sat",
    "hour": 8,
    "value": 26
  },
  {
    "day": "Sat",
    "hour": 9,
    "value": 49
  },
  {
    "day": "Sat",
    "hour": 10,
    "value": 43
  },
  {
    "day": "Sat",
    "hour": 11,
    "value": 42
  },
  {
    "day": "Sat",
    "hour": 12,
    "value": 45
  },
  {
    "day": "Sat",
    "hour": 13,
    "value": 38
  },
  {
    "day": "Sat",
    "hour": 14,
    "value": 41
  },
  {
    "day": "Sat",
    "hour": 15,
    "value": 32
  },
  {
    "day": "Sat",
    "hour": 16,
    "value": 39
  },
  {
    "day": "Sat",
    "hour": 17,
    "value": 27
  },
  {
    "day": "Sat",
    "hour": 18,
    "value": 31
  },
  {
    "day": "Sat",
    "hour": 19,
    "value": 43
  },
  {
    "day": "Sat",
    "hour": 20,
    "value": 29
  },
  {
    "day": "Sat",
    "hour": 21,
    "value": 45
  },
  {
    "day": "Sat",
    "hour": 22,
    "value": 45
  },
  {
    "day": "Sat",
    "hour": 23,
    "value": 26
  },
  {
    "day": "Sun",
    "hour": 0,
    "value": 21
  },
  {
    "day": "Sun",
    "hour": 1,
    "value": 25
  },
  {
    "day": "Sun",
    "hour": 2,
    "value": 35
  },
  {
    "day": "Sun",
    "hour": 3,
    "value": 33
  },
  {
    "day": "Sun",
    "hour": 4,
    "value": 47
  },
  {
    "day": "Sun",
    "hour": 5,
    "value": 40
  },
  {
    "day": "Sun",
    "hour": 6,
    "value": 29
  },
  {
    "day": "Sun",
    "hour": 7,
    "value": 32
  },
  {
    "day": "Sun",
    "hour": 8,
    "value": 48
  },
  {
    "day": "Sun",
    "hour": 9,
    "value": 22
  },
  {
    "day": "Sun",
    "hour": 10,
    "value": 38
  },
  {
    "day": "Sun",
    "hour": 11,
    "value": 50
  },
  {
    "day": "Sun",
    "hour": 12,
    "value": 21
  },
  {
    "day": "Sun",
    "hour": 13,
    "value": 20
  },
  {
    "day": "Sun",
    "hour": 14,
    "value": 22
  },
  {
    "day": "Sun",
    "hour": 15,
    "value": 37
  },
  {
    "day": "Sun",
    "hour": 16,
    "value": 26
  },
  {
    "day": "Sun",
    "hour": 17,
    "value": 26
  },
  {
    "day": "Sun",
    "hour": 18,
    "value": 48
  },
  {
    "day": "Sun",
    "hour": 19,
    "value": 24
  },
  {
    "day": "Sun",
    "hour": 20,
    "value": 39
  },
  {
    "day": "Sun",
    "hour": 21,
    "value": 42
  },
  {
    "day": "Sun",
    "hour": 22,
    "value": 28
  },
  {
    "day": "Sun",
    "hour": 23,
    "value": 46
  }
];
