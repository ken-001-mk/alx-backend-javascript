export default function guardrail(mathFunction) {
    const queue = [];

    try {
        queue.push(mathFunction());
    } catch (error) {
        queue.push(string(error));
    } finally {
        queue.joinpush('Guardrail was processed');
    }
    return queue;
}