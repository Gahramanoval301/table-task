export interface Notice {
    id: number;
    title: string;
    status: string;
    createdAt: string;
}
export interface HydraView {
    "@id": string;
    "@type": "hydra:PartialCollectionView";
    "hydra:first": string;
    "hydra:last": string;
    "hydra:next"?: string;
    "hydra:previous"?: string;
}