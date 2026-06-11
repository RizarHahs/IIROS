/**
 * API layer with built-in mock fallback.
 * Attempts real API calls first, falls back to mock data on failure.
 * This ensures the dashboard always shows data even without a backend.
 */

import {
  mockDevices,
  mockRecommendations,
  mockEnergyTrends,
  mockPeakHours,
  mockDeviceBreakdown,
  mockForecastData,
  mockAnalyticsSummary,
  mockAIDeepAnalysis,
  mockAISummary,
  mockReports,
} from "./mock-data";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "/api/v1";

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  if (res.status === 204) {
    return {} as T;
  }
  return res.json();
}

/** Try real API first, then fall back to mock */
async function withMock<T>(endpoint: string, mockData: T, options?: RequestInit): Promise<T> {
  try {
    return await fetchApi<T>(endpoint, options);
  } catch {
    // Silently return mock data if backend is unavailable
    return mockData;
  }
}

export const api = {
  devices: {
    list: () => withMock("/devices", mockDevices),
    get: (id: string) => withMock(`/devices/${id}`, mockDevices.find(d => d.id === id) || mockDevices[0]),
    create: async (data: any) => {
      try {
        return await fetchApi("/devices", { method: "POST", body: JSON.stringify(data) });
      } catch {
        // Mock: add to local list simulation
        return { id: `d${Date.now()}`, ...data, status: "online", consumption: 0, efficiency: 0, health: 100, lastReading: "Just now" };
      }
    },
    update: async (id: string, data: any) => {
      try {
        return await fetchApi(`/devices/${id}`, { method: "PATCH", body: JSON.stringify(data) });
      } catch {
        return { id, ...data };
      }
    },
    delete: async (id: string) => {
      try {
        return await fetchApi(`/devices/${id}`, { method: "DELETE" });
      } catch {
        return {};
      }
    },
  },
  readings: {
    latest: () => withMock("/readings/latest", {
      timestamp: new Date().toISOString(),
      consumption: 2847,
      generation: 325,
      cost: 398.58,
    }),
    history: (params?: Record<string, string>) => {
      const query = params ? "?" + new URLSearchParams(params).toString() : "";
      return withMock(`/readings/history${query}`, mockEnergyTrends);
    },
  },
  analytics: {
    summary: () => withMock("/analytics/summary", mockAnalyticsSummary),
    trends: () => withMock("/analytics/trends", mockEnergyTrends),
    topConsumers: () => withMock("/analytics/top-consumers", mockDeviceBreakdown),
    peakHours: () => withMock("/analytics/peak-hours", mockPeakHours),
    costAnalysis: () => withMock("/analytics/cost-analysis", {
      monthly_cost: 9566,
      daily_average: 319,
      cost_trend: "decreasing",
      savings_potential: 14500,
    }),
    carbonAnalysis: () => withMock("/analytics/carbon-analysis", {
      total_emissions: 34164,
      renewable_offset: 6220,
      net_emissions: 27944,
      target_progress: 72,
    }),
  },
  predictive: {
    forecast: () => withMock("/predictive/forecast/consumption", mockForecastData),
    health: (deviceId: string) => withMock(`/predictive/health/${deviceId}`, {
      device_id: deviceId,
      health_score: 85,
      predicted_failure_date: null,
      risk_level: "low",
      recommendations: ["Schedule preventive maintenance within 30 days"],
    }),
    anomalies: () => withMock("/predictive/anomalies", [
      { device_id: "d3", type: "overconsumption", severity: "warning", detected_at: new Date().toISOString(), description: "Server Room Cooling consuming 20% above expected baseline" },
      { device_id: "d6", type: "offline", severity: "info", detected_at: new Date().toISOString(), description: "Lab Equipment Cluster has been offline for extended period" },
    ]),
    optimization: () => withMock("/predictive/optimization-potential", {
      total_savings_potential: 28500,
      efficiency_improvement: 18.2,
      top_actions: [
        "HVAC smart scheduling: Rs 4,200/year",
        "Server cooling upgrade: Rs 8,500/year",
        "Solar expansion: Rs 12,000/year",
      ],
    }),
  },
  recommendations: {
    list: () => withMock("/recommendations", mockRecommendations),
    generate: async () => {
      try {
        return await fetchApi("/recommendations/generate", { method: "POST" });
      } catch {
        return { status: "generated", count: mockRecommendations.length };
      }
    },
  },
  reports: {
    list: () => withMock("/reports", mockReports),
    generate: async () => {
      try {
        return await fetchApi("/reports/generate", { method: "POST" });
      } catch {
        return { status: "generated", id: "rpt-mock-001" };
      }
    },
    get: (id: string) => withMock(`/reports/${id}`, mockReports[0]),
  },
  aiAnalysis: {
    summary: () => withMock("/analytics/ai/ai-summary", mockAISummary),
    comparison: (period1Days?: number, period2Days?: number) => {
      const params = new URLSearchParams();
      if (period1Days) params.append("period1_days", period1Days.toString());
      if (period2Days) params.append("period2_days", period2Days.toString());
      const query = params.toString() ? "?" + params.toString() : "";
      return withMock(`/analytics/ai/comparison${query}`, {
        period1: { consumption: 68328, cost: 9566 },
        period2: { consumption: 71245, cost: 9974 },
        change_percent: -4.1,
        summary: "Consumption decreased by 4.1% compared to the previous period.",
      });
    },
    deepAnalysis: () => withMock("/analytics/ai/deep-analysis", mockAIDeepAnalysis),
    serviceStatus: () => withMock("/analytics/ai/service-status", {
      status: "active",
      model: "Gemini",
      last_analysis: new Date().toISOString(),
      credits_remaining: "unlimited",
    }),
  },
};
