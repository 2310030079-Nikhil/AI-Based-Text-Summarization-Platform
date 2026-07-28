def generate_analytics(original_text, summary):

    original_words = len(original_text.split())

    summary_words = len(summary.split())

    compression_ratio = round(
        (summary_words / original_words) * 100,
        2
    )

    return {
        "original_words": original_words,
        "summary_words": summary_words,
        "compression_ratio": compression_ratio
    }