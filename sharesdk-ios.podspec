Pod::Spec.new do |s|

    s.name          = 'sharesdk-ios'
    s.version       = '3.0.0'
    s.summary       = 'tae sdk lib'
    s.homepage      = 'https://github.com/hustwyz/sharesdk-ios'
    s.author        = { 'Wang Yunzhen' => 'hustwyz@gmail.com' }
    s.platform      = :ios, '6.0'
    s.source        = {
        :git => 'https://github.com/hustwyz/sharesdk-ios.git',
        :tag => '3.0.0'
    }
    s.source_files = 'extends/../*.{h,m}'
    s.resources = '*.bundle', 'extends/../*.bundle'
    s.vendored_frameworks = '*.framework', 'extends/../*.framework'
    s.vendored_libraries = 'extends/../*.a'
    s.license = 'MIT'
    s.xcconfig = { 'FRAMEWORK_SEARCH_PATHS' => '$(PODS_ROOT)/ShareSDK' }
    s.framework = 'ImageIO', 'JavaScriptCore'
    s.library = 'icucore', 'z', 'stdc++', 'sqlite3'
    s.requires_arc = false

end
