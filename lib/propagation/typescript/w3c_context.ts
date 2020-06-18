import { SpanContext, TraceFlags } from "@opentelemetry/api";
import { TRACE_PARENT_HEADER, parseTraceParent } from "@opentelemetry/core"

function initializeSpanContext(spanContext: SpanContext) {

}

function parseOtelTrace(header) {
    const { traceparent } = header;
    return parseTraceParent(traceparent);
}

export { parseTraceParent };

/*class CreateSpanContext implements SpanContext {
    traceId: string;
    spanId: string;
    traceFlags: TraceFlags;

    constructor ()

}*/