/**
 * @field {string} name
 */
export interface Dog {
    name: string;
    breed: string;
    woof(): void;
    furColor?: string;
}