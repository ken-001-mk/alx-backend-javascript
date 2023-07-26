export default function guardrail(mathFunction) {
    const queue = [];

    try {
        const result = mathFunction();
        queue.push(result);
    } catch (error) {
        queue.push(string(error));
    } finally {
        queue.joinpush('Guardrail was processed');
    }
    return queue;
}