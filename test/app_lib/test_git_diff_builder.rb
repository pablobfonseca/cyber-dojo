  def teardown
    diff = GitDiff::GitDiffParser.new(@diff_lines.join("\n")).parse_one
    builder = GitDiff::GitDiffBuilder.new()
    actual = builder.build(diff, @source_lines)
    assert_equal @expected, actual
  end

  #- - - - - - - - - - - - - - - - - - - - - - -

    @diff_lines =
    ]

    @source_lines =
    ]
    @expected =
    @diff_lines =
    ]

    @source_lines =
    ]
    @expected =
    @diff_lines =
    ]

    @source_lines =
    ]
    @expected =
  test 'diffs 7 lines apart are not merged ' +
       'into contiguous sections in one chunk' do
    @diff_lines =
    ]

    @source_lines =
    ]
    @expected =
    @diff_lines =
    ]

    @source_lines =
    ]
    @expected =
    @diff_lines =
    ]

    @source_lines =
    ]
    @expected =
    @diff_lines =
    ]

    @source_lines =
    ]
    @expected =
    @diff_lines =
    ]

    @source_lines =
    ]
    @expected =
    @diff_lines =
    ]

    @source_lines =
    ]
    @expected =
    @diff_lines =
    ]

    @source_lines =
    @expected =