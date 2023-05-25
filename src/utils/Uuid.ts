export class Uuid {
    static generate(): number {
        return Math.floor(Math.random() * 1000);
    }
}