/**
 * Single source of truth for the three selected ventures shown on the homepage.
 * Used by the homepage renderer (cards, links) and by the venture ItemList JSON-LD,
 * so visible copy, outbound links and structured data cannot drift apart.
 *
 * `id` matches the banner `cls` key embedded in `source-assets/astra-preview.html`.
 * Banner artwork is read unchanged from that file; only the destination URLs
 * below decide where each venture links.
 */
export type VentureId = "robot-venture" | "event-venture" | "framework-venture";

export interface Venture {
  id: VentureId;
  name: string;
  detail: string;
  category: string;
  /** Approved outbound destination. */
  url: string;
}

export const ventures: Record<VentureId, Venture> = {
  "robot-venture": {
    id: "robot-venture",
    name: "RoboMarket",
    detail: "A UAE-first robotics marketplace connecting manufacturers and authorized suppliers with businesses and consumers, enabling robotics discovery, sales and access to industry insights.",
    category: "ROBOTICS & COMMERCE",
    url: "https://robomarket.ae",
  },
  "event-venture": {
    id: "event-venture",
    name: "IdeaVent",
    detail: "A platform for developing event concepts, planning experiences, and organizing production requirements.",
    category: "EVENT CONCEPTS",
    url: "https://ideavent.ai",
  },
  "framework-venture": {
    id: "framework-venture",
    name: "Visual Framework",
    detail: "An interactive visual framework for academic psychology and behavioral analysis, supporting the organization of concepts, mapping of relationships, and exploration of behavioral patterns.",
    category: "VISUAL THINKING",
    url: "https://visual-framework-system.vercel.app",
  },
};

export const isVentureId = (value: string): value is VentureId => value in ventures;
