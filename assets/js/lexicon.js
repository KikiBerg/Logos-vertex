const wordList = [
    {
        word: "academy",
        clue: "School founded by Plato"
    }, {
        word: "logic",
        clue: "The principles of valid reasoning"
    }, {
        word: "antibiotic",
        clue: "Substance that destroys bacteria"
    }, {
        word:"antidote",
        clue: "Remedy to counteract a poison"
    }, {
        word:"apathy",
        clue:"Lack of interest or emotion"
    }, {
        word: "archaeology",
        clue: "Study of human history and prehistory through artifacts"
    }, {
        word: "barometer",
        clue: "Instrument for measuring atmospheric pressure"
    }, {
        word: "lethargy",
        clue: "State of sluggishness or drowsiness"
    }, {
        word: "cosmos",
        clue: "Universe regarded as an orderly system"
    }, {
        word:"democracy",
        clue:"Government system by and for the people"
    }, {
        word:"dialogue",
        clue:"Conversation between two or more people"
    }, {
        word:"ethics",
        clue:"Moral principles"
    }, {
        word:"chromosome",
        clue:"Thread-like structure in the nucleus of a cell, carrying genetic information"
    }, {
        word:"hyperbola",
        clue:"Geometric curve with two branches, resembling two infinite bows"
    }, {
        word:"logarithm",
        clue:"Mathematical function that represents the exponent to which a base must be raised to produce a given number"
    }, {
        word:"parabola",
        clue:"U-shaped geometric curve"
    }, {
        word:"polynomial",
        clue:"Expression consisting of variables and coefficients, combined using addition, subtraction, and multiplication"
    }, {
        word:"therapy",
        clue:"Treatment to relieve or heal a disorder"
    }, {
        word:"psychiatry",
        clue:"Branch of medicine dealing with mental illness"
    }, {
        word:"anatomy",
        clue:"Study of the structure of organisms and their parts"
    }, {
        word:"orthopedics",
        clue:"Branch of medicine dealing with the correction of deformities of bones or muscles"
    }, {
        word:"electron",
        clue:"Subatomic particle with a negative charge"
    }, {
        word:"anonymous",
        clue:"Without a known or acknowledged name"
    }, {
        word:"utopia",
        clue:"Imaginary perfect society"
    }, {
        word:"paradox",
        clue:"Seemingly contradictory statement or situation"
    }, {
        word:"idiom",
        clue:"A group of words established by usage as having a meaning not deducible from those of the individual words"
    }, {
        word:"hypothesis",
        clue:"Proposed explanation for a phenomenon or a statement made on the basis of limited evidence as a starting point for further investigation"
    }, {
        word:"grammar",
        clue:"Set of structural rules for the composition of clauses, phrases, and words in any given natural language"
    }, {
        word:"genesis",
        clue:"The origin or mode of formation of something"
    }, {
        word:"exosphere",
        clue:"The outermost layer of a planet's atmosphere, extending from the top of the thermosphere to the limit of the planet's gravitational influence"
    }, {
        word:"euphoria",
        clue:"Feeling or state of intense excitement and happiness"
    }, {
        word:"economy",
        clue:"The management of a household or organization, especially with regard to the careful and efficient use of resources"
    }, {
        word:"eclectic",
        clue:"Deriving ideas, style, or taste from a broad and diverse range of sources"
    }, {
        word:"eccentric",
        clue:"Deviating from the customary character, unconventional or odd"
    }, {
        word:"dichotomy",
        clue:"A split or division into two contrasting parts or ideas"
    }, {
        word:"analysis",
        clue:"The process of breaking a complex topic or substance into smaller parts to gain a better understanding"
    }, {
        word:"biology",
        clue:"Study of living organisms"
    }, {
        word:"thesis",
        clue:"Statement put forward as a premise to be proved"
    }, {
        word:"technology",
        clue:"Application of scientific knowledge for practical purposes"
    }, {
        word:"symphony",
        clue:"Elaborate musical composition for orchestra"
    }, {
        word:"sarcasm",
        clue:"Use of irony to mock or convey contempt"
    }, {
        word:"plasma",
        clue:"Ionized gas with free-moving ions and electrons"
    }, {
        word:"phobia",
        clue:"Irrational fear or aversion"
    }, {
        word:"oasis",
        clue:"Fertile area in a desert"
    }, {
        word:"nemesis",
        clue:"Archenemy or source of downfall"
    }, {
        word:"mentor",
        clue:"Trusted advisor or teacher"
    }, {
        word:"rhapsody",
        clue:"Epic poem or part of one suitable for recitation"
    }, {
        word:"harmony",
        clue:"Agreement or accord"
    }, {
        word:"dinosaur",
        clue:"Extinct reptiles of the Mesozoic era"
    }, {
        word:"dilemma",
        clue:"Situation requiring a difficult choice between two options"
    }, {
        word:"charisma",
        clue:"Compelling attractiveness or charm"
    }, {
        word:"biopsy",
        clue:"Surgical removal and examination of tissue from a living organism"
    }, {
        word:"autopsy",
        clue:"Examination of a corpse to determine the cause of death"
    }, {
        word:"astronaut",
        clue:"Person trained to travel in outer space"
    }, {
        word:"apologetic",
        clue:"Expressing regret or remorse"
    }, {
        word:"synergy",
        clue:"Interaction of organizations or substances to produce a combined effect greater than the sum of their separate effects"
    }, {
        word:"philosophy",
        clue:"Study of fundamental questions concerning existence, knowledge, values, reason, mind, and language"
    }, {
        word:"pedagogy",
        clue:"Method, practice and theories of teaching"
    }, {
        word:"oxygen",
        clue:"Chemical element with symbol O"
    }, {
        word:"labyrinth",
        clue:"Maze or intricate network of passages"
    }, {
        word:"idiosyncrasy",
        clue:"Peculiar trait or behavior"
    }, {
        word:"hygiene",
        clue:"Practices conducive to maintaining health and preventing disease"
    }, {
        word:"geothermal",
        clue:"Relating to heat from the Earth's interior"
    }, {
        word:"genealogy",
        clue:"Study of family ancestry"
    }, {
        word:"nostalgia",
        clue:"Sentimental longing"
    }, {
        word:"enigma",
        clue:"Something mysterious or difficult to understand"
    }, {
        word:"planet",
        clue:"A celestial body that orbits a star"
    }, {
        word:"hypnosis",
        clue:"State of altered consciousness"
    }, {
        word:"hypotenuse",
        clue:"Longest side of a right triangle"
    }, {
        word:"stigma",
        clue:"Mark of disgrace or shame"
    }, {
        word:"zodiac",
        clue:"Celestial band divided into twelve equal parts, each named after a constellation"
    }, {
        word:"zenith",
        clue:"Highest point or peak"
    }, {
        word:"acrobat",
        clue:"Performer skilled in gymnastics and tumbling"
    }, {
        word:"cinema",
        clue:"Motion picture industry or film as an art form"
    }, {
        word:"ego",
        clue:"Sense of self-esteem or self-importance"
    }, {
        word:"tactic",
        clue:"Strategy for achieving a specific goal"
    }, {
        word:"zealot",
        clue:"Fanatical follower of a cause or belief"
    }, 

];
