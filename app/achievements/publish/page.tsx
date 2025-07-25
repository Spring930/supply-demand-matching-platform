// 发布成果页面

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '发布成果 - 供需对接平台',
  description: '发布您的科技成果，寻找合作机会',
};

export default function PublishAchievementPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-title mb-2">发布成果</h1>
        <p className="text-gray-600">分享您的科技成果，让更多人了解并寻找合作机会</p>
      </div>

      <div className="bg-white rounded-custom shadow-md p-8">
        <form className="space-y-6">
          {/* 基本信息 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-title border-b border-gray-200 pb-2">基本信息</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  成果名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="请输入成果名称"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  成果类型 <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent">
                  <option value="">请选择成果类型</option>
                  <option value="patent">专利</option>
                  <option value="paper">论文</option>
                  <option value="software">软件</option>
                  <option value="technology">技术</option>
                  <option value="product">产品</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  所属机构 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="请输入所属机构"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  所在地区 <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent">
                  <option value="">请选择地区</option>
                  <option value="北京">北京</option>
                  <option value="上海">上海</option>
                  <option value="广东">广东</option>
                  <option value="江苏">江苏</option>
                  <option value="浙江">浙江</option>
                  <option value="山东">山东</option>
                  <option value="四川">四川</option>
                  <option value="湖北">湖北</option>
                  <option value="其他">其他</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                应用行业 <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  '人工智能', '生物医药', '新能源', '新材料', 
                  '电子信息', '先进制造', '环境保护', '航空航天',
                  '海洋工程', '现代农业', '文化创意', '其他'
                ].map((industry) => (
                  <label key={industry} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-accent-600 bg-gray-100 border-gray-300 rounded focus:ring-accent-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{industry}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* 成果描述 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-title border-b border-gray-200 pb-2">成果描述</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                成果简介 <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="请简要描述您的成果特点和优势"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                详细描述 <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="请详细描述成果的技术原理、创新点、应用场景等"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                应用场景
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="请描述成果的主要应用场景和使用情况"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                商业化情况
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent">
                <option value="">请选择商业化情况</option>
                <option value="lab">实验室阶段</option>
                <option value="prototype">样品阶段</option>
                <option value="pilot">中试阶段</option>
                <option value="production">产业化阶段</option>
                <option value="market">市场化阶段</option>
              </select>
            </div>
          </div>

          {/* 合作需求 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-title border-b border-gray-200 pb-2">合作需求</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                寻求合作类型
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  '技术转让', '技术许可', '合作开发', '投资融资',
                  '产业化合作', '技术服务', '人才合作', '其他'
                ].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-accent-600 bg-gray-100 border-gray-300 rounded focus:ring-accent-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                合作要求
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="请描述您对合作伙伴的要求和期望"
              ></textarea>
            </div>
          </div>

          {/* 联系信息 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-title border-b border-gray-200 pb-2">联系信息</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  联系人 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="请输入联系人姓名"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  联系电话 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="请输入联系电话"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  电子邮箱 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="请输入电子邮箱"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  职务/职称
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="请输入职务或职称"
                />
              </div>
            </div>
          </div>

          {/* 附件上传 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-title border-b border-gray-200 pb-2">相关附件</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                成果相关文件
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-custom p-6 text-center hover:border-accent-300 transition-colors">
                <div className="text-4xl text-gray-400 mb-2">📎</div>
                <p className="text-sm text-gray-600 mb-2">点击上传或拖拽文件到此区域</p>
                <p className="text-xs text-gray-500">支持PDF、Word、图片等格式，单个文件不超过10MB</p>
                <input type="file" multiple className="hidden" />
              </div>
            </div>
          </div>

          {/* 提交按钮 */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="px-6 py-3 text-gray-700 bg-gray-100 rounded-custom hover:bg-gray-200 transition-colors"
            >
              保存草稿
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-accent-500 text-white rounded-custom hover:bg-accent-600 transition-colors"
            >
              发布成果
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}