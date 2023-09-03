import { Avatar, List } from 'antd';
import EXPERIENCES from '../../../public/assets/info/experiences.json'
import CompanyLogo from '../../../public/assets/images/companies/nette.jpeg'
import Image from "next/image";
const Career = () => {

    return (
        <div className={'ml-5 mt-5 mb-4 lg:mb-0 lg:mt-10'}>
            <div className="overflow-x-auto">
                <table className="table-lg">
                    <tbody>
                    {
                    EXPERIENCES.map((experience, index) => {
                        return (
                            <tr key={experience.id} className={'h-24'}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <Image width={30} height={30} src={`/assets/images/companies/${experience.company_image}`} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold dark:text-gray-200">{experience.role}</div>
                                            <div className="text-sm opacity-75 dark:text-gray-300">{experience.role_detail}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className={'dark:text-gray-200'}>
                                    {experience.company_name}
                                    <br/>
                                    <span className="badge badge-ghost badge-sm dark:text-gray-300">{experience.company_location}</span>
                                </td>
                                <td className={'dark:text-gray-300 hidden lg:block'}>{experience.start_date} - <br/> {experience.end_date}</td>

                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Career;