import yake

def extract_keywords(text):

    extractor = yake.KeywordExtractor(
        lan="en",
        n=1,
        top=10
    )

    keywords = extractor.extract_keywords(text)

    return [keyword[0] for keyword in keywords]